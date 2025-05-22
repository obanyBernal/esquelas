import "../css/VistaPreviaEsquela.css";
import logo from "../assets/logo-preview.png";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

function VistaPreviaEsquela({ formData }) {
  const { nombre, datos, pensamiento, fondo, tamanoNombre } = formData;
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="preview-wrapper">
      <div className="preview-banner">
        <h2 className="preview-title">ESQUELA PREVIEW</h2>
      </div>
      <button
        type="button"
        className="btn-cerrar-sesion"
        onClick={handleLogout}
      >
        <FiLogOut size={20} />
        <span style={{ marginTop: "1rem" }}>Cerrar Sesión</span>
      </button>

      {/* ✅ Contenedor centrador */}
      <div className="preview-center-box">
        <div className="esquela-preview-wrapper">
          <div
            className="esquela-preview"
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL
              }assets/fondos/${fondo})`,
            }}
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
              <h2
                className="esquela-nombre"
                style={{
                  fontSize: `${tamanoNombre || 32}px`, // Asegúrate de extraerlo de formData
                }}
              >
                {nombre}
              </h2>
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
      </div>
    </div>
  );
}

export default VistaPreviaEsquela;
