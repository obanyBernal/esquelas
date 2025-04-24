import React from "react";
import "../css/EditorFormulario.css";
import logo from "../assets/logo-g.png";
import { useEffect, useState } from "react";
import { obtenerFondos, obtenerPensamientos } from "../services/api";

function EditorFormulario({ formData, setFormData }) {
  const [fondos, setFondos] = useState([]);
  const [pensamientos, setPensamientos] = useState([]);
  const [esquelaGuardada, setEsquelaGuardada] = useState(false);
  useEffect(() => {
    const cargarDatos = async () => {
      const fondosData = await obtenerFondos();
      const pensamientosData = await obtenerPensamientos();
      setFondos(fondosData);
      setPensamientos(pensamientosData);
    };
    cargarDatos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGuardarComoPNG = () => {
    const preview = document.querySelector(".esquela-preview");
    if (preview) {
      import("html2canvas").then(({ default: html2canvas }) => {
        html2canvas(preview).then((canvas) => {
          const link = document.createElement("a");
          link.download = "esquela.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
        });
      });
    }
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

      <div className="campo-flex">
        <select name="fondo" value={formData.fondo} onChange={handleChange}>
          <option value="">Seleccione Fondo</option>
          {fondos.map((fondo) => (
            <option key={fondo.id} value={fondo.imagen}>
              {fondo.nombre}
            </option>
          ))}
        </select>
        <input
          type="file"
          accept="image/*"
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
          className="btn-cargarFoto"
        />
      </div>
      <select
        name="pensamiento"
        value={formData.pensamiento}
        onChange={handleChange}
      >
        <option value="">Seleccione pensamiento</option>
        {pensamientos.map((p) => (
          <option key={p.id} value={p.texto}>
            {p.texto}
          </option>
        ))}
      </select>

      {!esquelaGuardada ? (
        <button
          type="button"
          className="btn-guardar"
          onClick={() => setEsquelaGuardada(true)}
        >
          Guardar Cambios
        </button>
      ) : (
        <button
          type="button"
          className="btn-guardar"
          onClick={handleGuardarComoPNG}
        >
          Guardar como PNG
        </button>
      )}
    </form>
  );
}

export default EditorFormulario;
