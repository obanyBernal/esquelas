import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import "../css/VistaPreviaEsquela.css";
import logo from "../assets/logo-preview.png";

function VistaCompletaEsquela() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Obtenemos los datos desde localStorage al cargar la ventana emergente
    const data = localStorage.getItem("formDataEsquela");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        // Si la imagen excede 1MB (~1.3 millones de caracteres en base64), ignórala
        if (parsed.foto && parsed.foto.length > 1300000) {
          delete parsed.foto;
        }
        setFormData(parsed);
      } catch (e) {
        console.error("Error al parsear formDataEsquela:", e);
      }
    }
  }, []);

  const handleDescargarPNG = () => {
    const preview = document.querySelector(".esquela-preview");
    if (!preview) return;

    html2canvas(preview, {
      width: 1200,
      height: 1200,
      scale: 1,
      useCORS: true,
      allowTaint: true,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "esquela.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  if (!formData) return <p>Cargando vista previa...</p>;

  const { nombre, datos, pensamiento, fondo, tamanoDatos, tamanoPensamiento, foto } = formData;

  return (
    <div
      className="esquela-preview"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/fondos/${fondo})`,
        transform: "none", // anulamos escala
        width: "1200px",
        height: "1200px",
      }}
    >
      <img src={logo} alt="Logo" className="preview-logo" />
      <div className="esquela-contenido">
        {foto && (
          <img
            src={foto}
            alt="Foto del difunto"
            className="esquela-foto"
          />
        )}
        <h3 className="esquela-sub">Lamentamos el sensible fallecimiento de:</h3>
        <h2 className="esquela-nombre">{nombre}</h2>
        <p className="esquela-datos" style={{ fontSize: `${tamanoDatos || 24}px`, whiteSpace: "pre-wrap" }}>
          {datos}
        </p>
        {pensamiento && (
          <blockquote
            className="esquela-pensamiento"
            style={{ fontSize: `${tamanoPensamiento || 18}px` }}
          >
            “{pensamiento}”
          </blockquote>
        )}
      </div>

      <button
        onClick={handleDescargarPNG}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#0b558e",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Descargar PNG
      </button>
    </div>
  );
}

export default VistaCompletaEsquela;
