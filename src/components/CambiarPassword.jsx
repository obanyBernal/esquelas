import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Cambiar-password.css'

function CambiarPassword() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("usuario"));
  const [nueva, setNueva] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleCambio = async (e) => {
    e.preventDefault();

    if (nueva !== confirmar) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch('https://octoti.com/api-esquelas/cambiar-password', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario: storedUser.usuario,
          nuevaContrasena: nueva
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje("Contraseña actualizada correctamente");

        // Actualizar localStorage para quitar requiereCambio
        const nuevoUsuario = { ...storedUser, requiereCambio: false };
        localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));

        setTimeout(() => navigate("/editor"), 1500);
      } else {
        setError(data.error || "Ocurrió un error al actualizar");
      }

    } catch (err) {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Hola {storedUser?.nombre}, cambia tu contraseña</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}

        <form onSubmit={handleCambio}>
          <label>Nueva Contraseña</label>
          <input type="password" value={nueva} onChange={(e) => setNueva(e.target.value)} required />
          <label>Confirmar Contraseña</label>
          <input type="password" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} required />
          <button type="submit" className="btn-CambiarPassword">Guardar y continuar</button>
        </form>
      </div>
    </div>
  );
}

export default CambiarPassword;
