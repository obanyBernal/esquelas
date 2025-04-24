import React from 'react';
import '../css/EditorFormulario.css';
import logo from '../assets/logo-g.png';
import { useEffect, useState } from 'react';
import { obtenerFondos, obtenerPensamientos } from '../services/api';

function EditorFormulario({ formData, setFormData }) {
  const [fondos, setFondos] = useState([]);
  const [pensamientos, setPensamientos] = useState([]);
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

  return (
    <form className="editor-formulario">
      <img src={logo} alt="Logo" className="form-logo" />

      <h2 className='form-title'>Editor de Esquelas</h2>

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
        maxLength={255}
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
        <button type="button" className="btn-verfondos">Ver fondos</button>
      </div>

      <select name="pensamiento" value={formData.pensamiento} onChange={handleChange}>
        <option value="">Seleccione pensamiento</option>
        {pensamientos.map((p) => (
          <option key={p.id} value={p.texto}>
            {p.texto}
          </option>
        ))}
      </select>

      <button type="submit" className="btn-guardar">Guardar Cambios</button>
    </form>
  );
}

export default EditorFormulario;
