// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"; // Usamos HashRouter en lugar de BrowserRouter
import App from "./App.jsx";
import EditorEsquela from "./components/EditorEsquela.jsx";
import VistaCompletaEsquela from "./components/VistaCompletaEsquela";
import "./index.css";
import CambiarPassword from './components/CambiarPassword';


console.log("🌟 React App cargada correctamente");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<App />} />
        <Route path="/editor" element={<EditorEsquela />} />
        <Route path="/cambiar-password" element={<CambiarPassword />} />
        <Route
          path="/vista"
          element={
            <VistaCompletaEsquela
              formData={JSON.parse(
                localStorage.getItem("formDataEsquela") || "{}"
              )}
            />
          }
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
