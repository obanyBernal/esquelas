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
      /*width: 1200,*/
      /*height: 1200,*/
      /*scale: 1,*/
      scale: window.devicePixelRatio,
      useCORS: true,
      allowTaint: true,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "esquela.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#eaeaea",
        minHeight: "100vh",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <div
        className="esquela-preview esquela-preview-full"
        style={{
          width: "1200px",
          height: "1200px",
          margin: "0 auto",
          position: "relative",
          /*overflow: "hidden",*/
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          display: "flex", // ✅ Centrado vertical
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Fondo */}
        <img
          src={`${import.meta.env.BASE_URL}assets/fondos/${fondo}`}
          alt="Fondo"
          className="fondo-esquela"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="preview-logo"
          style={{
            position: "absolute",
            top: "30px",
            left: "50%",
            width: "90px",
            height: "90px",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        />

        {/* Contenedor que centra el contenido con flex */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          {/* Contenido blanco */}
          <div
            className="esquela-contenido"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "20px",
              padding: "40px",
              width: "90%",
              maxWidth: "1000px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {foto && (
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  marginBottom: "1rem",
                  position: "relative",
                  zIndex: 5,
                }}
              >
                <svg width="200" height="200" style={{ display: "block" }}>
                  <defs>
                    <clipPath id="circleView">
                      <circle cx="100" cy="100" r="100" />
                    </clipPath>
                  </defs>
                  <image
                    xlinkHref={foto}
                    width="200"
                    height="200"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#circleView)"
                  />
                  {/* Borde blanco decorativo */}
                  <circle
                    cx="100"
                    cy="100"
                    r="97" // un poco menos que 100 para que no se corte
                    fill="none"
                    stroke="white"
                    strokeWidth="6"
                  />
                </svg>
              </div>
            )}

            <h3 className="esquela-sub">
              Lamentamos el sensible fallecimiento de:
            </h3>
            <h2 className="esquela-nombre">{nombre}</h2>

            <p
              className="esquela-datos"
              style={{
                fontSize: `${tamanoDatos || 24}px`,
                whiteSpace: "pre-wrap",
                margin: "1rem 0",
              }}
            >
              {datos}
            </p>

            {pensamiento && (
              <blockquote
                className="esquela-pensamiento"
                style={{
                  fontSize: `${tamanoPensamiento || 18}px`,
                  fontStyle: "italic",
                  color: "#0b558e",
                  marginTop: "2rem",
                }}
              >
                “{pensamiento}”
              </blockquote>
            )}
          </div>
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
