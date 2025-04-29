import "../css/VistaPreviaEsquela.css";
import logo from "../assets/logo-preview.png";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

function VistaPreviaEsquela({ formData }) {
  const { nombre, datos, pensamiento, fondo } = formData;
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="preview-wrapper">
      <button
        type="button"
        className="btn-cerrar-sesion"
        onClick={handleLogout} // ✅ Usa la función
      >
        <FiLogOut size={20} style={{ marginBottom: "4px" }} />
        <span>Cerrar Sesión</span>
      </button>
      <h2 className="preview-title">ESQUELA PREVIEW</h2>
      <div
        className="esquela-preview"
        style={{ backgroundImage: `url(/assets/fondos/${fondo})` }}
      >
        <img src={logo} alt="Logo" className="preview-logo" />
        <div className="esquela-contenido">
          {formData.foto && (
            <img
              src={formData.foto}
              alt="Foto del difunto"
              className="esquela-foto"
            />
          )}
          <h3 className="esquela-sub">
            Lamentamos el sensible fallecimiento de:
          </h3>
          <h2 className="esquela-nombre">{nombre}</h2>
          <p
            className="esquela-datos"
            style={{ fontSize: `${formData.tamanoDatos || 24}px` }}
          >
            {datos}
          </p>
          {pensamiento && (
            <blockquote
            className="esquela-pensamiento"
            style={{ fontSize: `${formData.tamanoPensamiento || 18}px` }}
          >
            “{pensamiento}”
          </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}

export default VistaPreviaEsquela;
