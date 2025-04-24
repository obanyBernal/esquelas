import "../css/VistaPreviaEsquela.css";

function VistaPreviaEsquela({ formData }) {
  const { nombre, datos, pensamiento, fondo } = formData;

  return (
    <div
      className="esquela-preview"
      style={{ backgroundImage: `url(/assets/fondos/${fondo})` }}
    >
      <div className="esquela-contenido">
        <h3 className="esquela-sub">
          Lamentamos el sensible fallecimiento de:
        </h3>
        {formData.foto && (
          <img
            src={formData.foto}
            alt="Foto del difunto"
            className="esquela-foto"
          />
        )}

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
