import React, { useState } from "react";
import "../css/EditorFormulario.css";
import logo from "../assets/logo-g.png";
import html2canvas from "html2canvas";
import recortar from "../assets/recortar.svg";
import generar from "../assets/generar.svg";

const pensamientosArray = [
  "El cielo se iluminó por la llegada de este hermoso Ángel, siempre guardaremos los mejores recuerdos…. Te extrañaremos.",
  "Cuando la vida te separa de un ser querido el recuerdo de su sonrisa es la mejor manera de seguir adelante.",
  "Para los que amé y para los que me amaron: Que su tristeza se convierta, en confianza y fe Es solo por un momento que vamos a estar separados. Así que bendigan los recuerdos de su corazón.",
  "Como los rayos del sol iluminan el mundo entero, tus recuerdos, iluminaran nuestros corazones y nuestra mente por el resto de nuestros días.",
  "Tu ausencia ha dejado un inmenso vacío, pero para los que te amamos, no dejaras de existir jamás.",
  "Este es el mensaje que oímos de él y os anunciamos: Que Dios es Luz, y que en él no hay tiniebla alguna. 1.Juan 1:25",
  "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te fortalezco; siempre te ayudaré; siempre te sustentaré con la diestra de mi justicia. Isaías 41:10",
  "Aunque pase por quebradas oscuras, no temo ningún mal, porque tú estás conmigo con tu vara y tu bastón, y al verlas voy sin miedo. Salmos 23: 4",
  "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá. Y todo aquel que vive y cree en mí, no morirá eternamente. ¿Crees esto? Juan 11:25-26",
  "Si el hombre muere, ¿Puede volver a vivir? Esperare todos los días de mi servicio obligatorio hasta que llegue mi liberación. Tú llamarás y yo responderé. Ansiarás volver a ver la obra de tus manos. Job 14:14-15",

  // Nuevas frases del documento
  "Así que no temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios. Te fortaleceré y te ayudaré; te sostendré con mi diestra victoriosa. Isaías 41:10",
  "Aunque pase por el valle de sombra de muerte, no temeré mal alguno, porque tú estás conmigo: tu vara y tu cayado me infunden aliento. Salmos 23:4",
  "Dios es nuestro amparo y nuestra fortaleza, nuestra ayuda segura en momentos de angustia. Salmo 46:1",
  "He peleado la buena batalla, he terminado la carrera, he guardado la fe, ahora me toca recibir la corona merecida que Dios que es justo me dará. 2ª Timoteo 4:7",
  "Porque para mí el vivir es Cristo y el morir es ganancia. Filipenses 1:21",
  "Así también ustedes ahora sienten tristeza, pero yo los volveré a ver y su corazón se llenará de alegría, y nadie les podrá arrebatar ese gozo. Juan 16:22",
  "Este es nuestro Dios, ahora y para siempre. El Dios nuestro nos guiara más allá de la muerte. Salmo 48:14",
  "En cada pensamiento y en cada silencio, tu recuerdo vive con nosotros siempre.",
  "Nos queda tu risa, tus abrazos y todo lo que fuiste… porque aunque te hayas ido, sigues siendo parte de nosotros.",
  "Tu partida deja un vacío inmenso, pero tu amor y recuerdos vivirán por siempre en nuestros corazones.",
  "Dejas un legado de amor y fortaleza que nunca olvidaremos.",
  "Gracias por darnos tanto amor en tan poco tiempo. Tu luz es eterna, y tu recuerdo, nuestro mayor tesoro.",
  "Te fuiste sin avisar, dejando un silencio que duele… pero también un amor que jamás se irá.",
  "Fuiste un regalo de amor que la vida nos dio por un momento, y que el cielo abrazó para siempre.",
  "Tu luz fue breve, pero iluminó nuestras almas para siempre. Gracias por habernos elegido.",
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
  { id: 12, nombre: "Fondo 12", imagen: "fondo12.png" },
  { id: 13, nombre: "Fondo 13", imagen: "fondo13.png" },
  { id: 14, nombre: "Fondo 14", imagen: "fondo14.png" },
  { id: 15, nombre: "Fondo 15", imagen: "fondo15.png" },
  { id: 16, nombre: "Fondo 16", imagen: "fondo16.png" },
  { id: 17, nombre: "Fondo 17", imagen: "fondo17.png" },
  { id: 18, nombre: "Fondo 18", imagen: "fondo18.png" },
  { id: 19, nombre: "Fondo 19", imagen: "fondo19.png" },
  { id: 20, nombre: "Fondo 20", imagen: "fondo20.png" },
  { id: 21, nombre: "Fondo 21", imagen: "fondo21.png" },
  { id: 22, nombre: "Fondo 22", imagen: "fondo22.png" },
  { id: 23, nombre: "Fondo 23", imagen: "fondo23.png" },
  { id: 24, nombre: "Fondo 24", imagen: "fondo24.png" },
  { id: 25, nombre: "Fondo 25", imagen: "fondo25.png" },
  { id: 26, nombre: "Fondo 26", imagen: "fondo26.png" },
  { id: 27, nombre: "Fondo 27", imagen: "fondo27.png" },
  { id: 28, nombre: "Fondo 28", imagen: "fondo28.png" },
  { id: 29, nombre: "Fondo 29", imagen: "fondo29.png" },
  { id: 30, nombre: "Fondo 30", imagen: "fondo30.png" },
  { id: 31, nombre: "Fondo 31", imagen: "fondo31.png" },
  { id: 32, nombre: "Fondo 32", imagen: "fondo32.png" },
  { id: 33, nombre: "Fondo 33", imagen: "fondo33.png" },
  { id: 34, nombre: "Fondo 34", imagen: "fondo34.png" },
  { id: 35, nombre: "Fondo 35", imagen: "fondo35.png" },
  { id: 36, nombre: "Fondo 36", imagen: "fondo36.png" },
  { id: 37, nombre: "Fondo 37", imagen: "fondo37.png" },
  { id: 38, nombre: "Fondo 38", imagen: "fondo38.png" }
];

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
      <h3>Versión 1.2</h3>

      <label>Nombre del difunto</label>
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      {/* Nuevo Controlador para el tamaño del nombre */}
      <div className="controlador">
        <label htmlFor="tamanoNombre">Tamaño del nombre:</label>
        <input
          id="tamanoNombre"
          type="range"
          min="18"
          max="48"
          step="1"
          value={formData.tamanoNombre || 32}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              tamanoNombre: e.target.value,
            }))
          }
        />
      </div>
      <div className="foto-carga-wrapper">
        <label
          htmlFor="file-upload"
          className={`btn-cargarFoto ${
            formData.foto ? "btn-cargarFoto-cargada" : ""
          }`}
        >
          {formData.foto ? "Foto Cargada" : "Cargar Foto"}
        </label>
        <span className="nombre-archivo">
          {formData.foto ? "Foto seleccionada" : "Sin archivos seleccionados"}
        </span>
      </div>

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
        <button
          className="btn-selector-esquelas"
          type="button"
          onClick={() =>
            window.open("https://selector-esquelas.vercel.app/", "_blank")
          }
        >
          Selector de Fondos
        </button>
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
      <div className="botones-esquela">
        <button
          className="btn-guardar"
          type="button"
          onClick={() => {
            localStorage.setItem("formDataEsquela", JSON.stringify(formData));
            window.open(`${import.meta.env.BASE_URL}#/vista`, "_blank");
          }}
        >
          Vista Previa
        </button>
      </div>
      <h2 className="herramientas-title">
        Herramientas de Inteligencia Artificial
      </h2>
      <div className="botones-herramientas">
        <button
          className="btn-guardar btn-con-icono"
          type="button"
          onClick={() =>
            window.open("https://www.iloveimg.com/es/recortar-imagen", "_blank")
          }
        >
          <img src={recortar} alt="Recortar" className="icono-recortar-svg" />
          Recortar
        </button>

        <button
          className="btn-guardar btn-con-icono"
          type="button"
          onClick={() =>
            window.open(
              "https://www.fotor.com/es/features/ai-image-extender/",
              "_blank"
            )
          }
        >
          <img src={generar} alt="IA Generar" className="icono-recortar-svg" />
          IA Generar
        </button>
      </div>
    </form>
  );
}

export default EditorFormulario;
