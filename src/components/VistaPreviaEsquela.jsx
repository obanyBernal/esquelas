import "../css/VistaPreviaEsquela.css";
import logo from "../assets/logo-preview.png";

function VistaPreviaEsquela({ formData }) {
  const { nombre, datos, pensamiento, fondo } = formData;

  return (
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
        <p className="esquela-datos">{datos}</p>
        {pensamiento && (
          <blockquote className="esquela-pensamiento">
            “{pensamiento}”
          </blockquote>
        )}
      </div>
    </div>
  );
}

export default VistaPreviaEsquela;
