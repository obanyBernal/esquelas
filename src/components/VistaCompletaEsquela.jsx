// src/components/VistaCompletaEsquela.jsx
import React from "react";
import html2canvas from "html2canvas";
import logo from "../assets/logo-preview.png";
import "../css/VistaPreviaEsquela.css";

function VistaCompletaEsquela({ formData }) {
  const {
    nombre,
    datos,
    pensamiento,
    fondo,
    foto,
    tamanoDatos,
    tamanoPensamiento,
  } = formData;

  const handleDescargar = () => {
    const element = document.querySelector(".esquela-preview-full");
    if (!element) return;

    html2canvas(element, {
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

  console.log("formData recibido:", formData);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        className="esquela-preview esquela-preview-full"
        style={{
          position: "relative",
          width: "1200px",
          height: "1200px",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        {/* Fondo como imagen real */}
        <img
          src={`${import.meta.env.BASE_URL}assets/fondos/${fondo}`}
          alt="Fondo"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        {/* Contenido principal */}
        <img src={logo} alt="Logo" className="preview-logo" style={{ zIndex: 2, position: "relative" }} />
        <div className="esquela-contenido" style={{ position: "relative", zIndex: 2 }}>
          {foto && <img src={foto} alt="Foto" className="esquela-foto" />}
          <h3 className="esquela-sub">Lamentamos el sensible fallecimiento de:</h3>
          <h2 className="esquela-nombre">{nombre}</h2>
          <p
            className="esquela-datos"
            style={{
              fontSize: `${tamanoDatos || 24}px`,
              whiteSpace: "pre-wrap",
            }}
          >
            {datos}
          </p>
          {pensamiento && (
            <blockquote
              className="esquela-pensamiento"
              style={{
                fontSize: `${tamanoPensamiento || 18}px`,
              }}
            >
              “{pensamiento}”
            </blockquote>
          )}
        </div>
      </div>

      <button
        onClick={handleDescargar}
        style={{
          marginTop: "2rem",
          backgroundColor: "#0b558e",
          color: "white",
          padding: "10px 25px",
          borderRadius: "8px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
        }}
      >
        Descargar PNG
      </button>
    </div>
  );
}

export default VistaCompletaEsquela;
