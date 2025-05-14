import React, { useState } from "react";
import "../css/EditorFormulario.css";
import logo from "../assets/logo-g.png";
import html2canvas from "html2canvas";

const pensamientosArray = [
  "El cielo se iluminó por la llegada de este hermoso Ángel, siempre guardaremos los mejores recuerdos…. Te extrañaremos.",
  "Cuando la vida te separa de un ser querido el recuerdo de su sonrisa es la mejor manera de seguir adelante. ",
  "Para los que amé y para los que me amaron: Que su tristeza se convierta, en confianza y fe Es solo por un momento que vamos a estar separados. Así que bendigan los recuerdos de su corazón.",
  "Como los rayos del sol iluminan el mundo entero, tus recuerdos, iluminaran nuestros corazones y nuestra mente por el resto de nuestros días.",
  "Tu ausencia ha dejado un inmenso vacío, pero para los que te amamos, no dejaras de existir jamás.",
  "Este es el mensaje que oímos de él y os anunciamos: Que Dios es Luz, y que en él no hay tiniebla alguna. 1.Juan 1:25",
  "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te fortalezco; siempre te ayudaré; siempre te sustentaré con la diestra de mi justicia. Isaías 41:10",
  "Aunque pase por quebradas oscuras, no temo ningún mal, porque tú estás conmigo con tu vara y tu bastón, y al verlas voy sin miedo. Salmos 23: 4",
  "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá. Y todo aquel que vive y cree en mí, no morirá eternamente. ¿Crees esto? Juan 11:25-26",
  "Si el hombre muere, ¿Puede volver a vivir? Esperare todos los días de mi servicio obligatorio hasta que llegue mi liberación. Tú llamarás y yo responderé. Ansiarás volver a ver la obra de tus manos. Job 14:14-15",
];

const fondosArray = [
  { id: 1, nombre: "Fondo 1", imagen: "fondo1.png" },
  { id: 2, nombre: "Fondo 2", imagen: "fondo2.png" },
  { id: 3, nombre: "Fondo 3", imagen: "fondo3.png" },
  { id: 4, nombre: "Fondo 4", imagen: "fondo4.png" },
  { id: 5, nombre: "Fondo 5", imagen: "fondo5.png" },
  { id: 6, nombre: "Fondo 6", imagen: "fondo6.png" },
  { id: 7, nombre: "Fondo 7", imagen: "fondo7.png" },
  { id: 8, nombre: "Fondo 8", imagen: "fondo8.png" },
  { id: 9, nombre: "Fondo 9", imagen: "fondo9.png" },
  { id: 10, nombre: "Fondo 10", imagen: "fondo10.png" },
  { id: 11, nombre: "Fondo 11", imagen: "fondo11.png" },
  { id: 121, nombre: "Fondo 12 rosa", imagen: "fondo12a.png" },
  { id: 122, nombre: "Fondo 12 azul", imagen: "fondo12b.png" },
  { id: 13, nombre: "Fondo 13", imagen: "fondo13.png" },
  { id: 14, nombre: "Fondo 14", imagen: "fondo14.png" },
  { id: 15, nombre: "Fondo 15", imagen: "fondo15.png" },
];

const descargarEsquela = () => {
  const elemento = document.querySelector(".esquela-preview");
  if (elemento) {
    html2canvas(elemento, {
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
  } else {
    alert("No se encontró la vista previa para exportar.");
  }
};

function EditorFormulario({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="editor-formulario">
      <img src={logo} alt="Logo" className="form-logo" />

      <h2 className="form-title">Editor de Esquelas</h2>

      <label>Nombre del difunto</label>
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese nombre"
        value={formData.nombre}
        onChange={handleChange}
      />

      <label>Datos del difunto</label>
      <textarea
        name="datos"
        placeholder="Ingrese datos del difunto, máximo 255 caracteres."
        maxLength={500}
        value={formData.datos}
        onChange={handleChange}
      />
      <div className="controladores-texto">
        <div className="controlador">
          <label htmlFor="tamanoDatos">Tamaño del texto de los datos:</label>
          <input
            id="tamanoDatos"
            type="range"
            min="12"
            max="36"
            step="1"
            value={formData.tamanoDatos || 24}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, tamanoDatos: e.target.value }))
            }
          />
        </div>

        <div className="controlador">
          <label htmlFor="tamanoPensamiento">Tamaño del pensamiento:</label>
          <input
            id="tamanoPensamiento"
            type="range"
            min="12"
            max="36"
            step="1"
            value={formData.tamanoPensamiento || 18}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                tamanoPensamiento: e.target.value,
              }))
            }
          />
        </div>
      </div>

      <div className="campo-flex">
        <select name="fondo" value={formData.fondo} onChange={handleChange}>
          <option value="">Seleccione Fondo</option>
          {fondosArray.map((fondo) => (
            <option key={fondo.id} value={fondo.imagen}>
              {fondo.nombre}
            </option>
          ))}
        </select>

        <label
          htmlFor="file-upload"
          className={`btn-cargarFoto ${
            formData.foto ? "btn-cargarFoto-cargada" : ""
          }`}
        >
          {formData.foto ? "Foto Cargada" : "Cargar Foto"}
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setFormData((prev) => ({
                  ...prev,
                  foto: reader.result,
                }));
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        <span className="nombre-archivo">
          {formData.foto ? "Foto seleccionada" : "Sin archivos seleccionados"}
        </span>
      </div>

      <select
        name="pensamiento"
        value={formData.pensamiento}
        onChange={handleChange}
      >
        <option value="">Seleccione pensamiento</option>
        {pensamientosArray.map((p, index) => (
          <option key={index} value={p}>
            {p}
          </option>
        ))}
      </select>
<button
  type="button"
  className="btn-guardar"
  onClick={descargarEsquela}
>
  Descargar Esquela
</button>
    </form>
  );
}

export default EditorFormulario;
