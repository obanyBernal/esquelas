import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/Login.css";
import bg from "../assets/bg.png";
import logo from "../assets/logo-g.png";
import { usuarios } from "../data/usuarios";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://octoti.com/api-esquelas/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, contrasena }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("usuario", JSON.stringify(data));
        if (data.requiereCambio) {
          navigate("/cambiar-password");
        } else {
          navigate("/editor");
        }
      } else {
        setError(data.error || "Error al iniciar sesión");
      }
    } catch (err) {
      setError("Error de conexión con el servidor");
    }
  };
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-box">
        <img src={logo} alt="Logo" className="login-logo" />
        <h2 className="login-title">Editor de Esquelas </h2>
        <h3>Versión 1.2</h3>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleLogin}>
          <label>Nombre de Usuario</label>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <label>Contraseña</label>
          <input
            type={mostrarContrasena ? "text" : "password"}
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
          <div style={{ marginTop: "0.5rem", textAlign: "left" }}>
            <input
              type="checkbox"
              id="toggle-password"
              checked={mostrarContrasena}
              onChange={() => setMostrarContrasena(!mostrarContrasena)}
            />
            <label
              htmlFor="toggle-password"
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.85rem",
                color: "#555",
              }}
            >
              Mostrar contraseña
            </label>
          </div>

          <button type="submit" className="btn-login">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
