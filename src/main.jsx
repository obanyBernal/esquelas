import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import App from './App.jsx';
import EditorEsquela from './components/EditorEsquela.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<App />} />
        <Route path="/editor" element={<EditorEsquela />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
