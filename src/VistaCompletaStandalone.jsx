import React from "react";
import ReactDOM from "react-dom/client";
import VistaCompletaEsquela from "./components/VistaCompletaEsquela";

const formData = JSON.parse(localStorage.getItem("formDataEsquela") || "{}");
function VistaCompletaStandalone() {
  const formData = JSON.parse(localStorage.getItem("formDataEsquela") || "{}");
  return <VistaCompletaEsquela formData={formData} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VistaCompletaEsquela formData={formData} />
  </React.StrictMode>
);

export default VistaCompletaStandalone;

