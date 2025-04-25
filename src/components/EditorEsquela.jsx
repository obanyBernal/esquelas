import React, { useState } from 'react';
import EditorFormulario from './EditorFormulario';
import VistaPreviaEsquela from './VistaPreviaEsquela';
import '../css/EditorEsquela.css';

function EditorEsquela() {
  const [formData, setFormData] = useState({
    nombre: '',
    datos: '',
    pensamiento: '',
    fondo: '',
    foto: '',
  });

  return (
    <div className="editor-container">
      <div className="editor-form">
        <EditorFormulario formData={formData} setFormData={setFormData} />
      </div>
      <div className="editor-preview">
        <VistaPreviaEsquela formData={formData} />
      </div>
    </div>
  );
}

export default EditorEsquela;

