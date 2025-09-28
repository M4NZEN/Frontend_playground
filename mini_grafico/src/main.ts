import { dibujarGrafico } from "./grafico";
import { parseCSV } from "./csv";
import type { Grafico } from "./tipos";

let csvData = "";

const dropZone = document.getElementById("drop-zone")!;
const btnCalcular = document.getElementById("btn-calcular")!;
const contenedorId = "grafico-contenedor";

dropZone.addEventListener("dragover", e => {
  e.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", e => {
  e.preventDefault();
  dropZone.classList.remove("dragover");

  const files = e.dataTransfer?.files;
  if (!files || files.length === 0) return;

  const file = files[0];
  const reader = new FileReader();
  reader.onload = () => {
    csvData = reader.result as string;
    dropZone.textContent = `Archivo cargado: ${file.name}`;
  };
  reader.readAsText(file);
});

btnCalcular.addEventListener("click", () => {
  if (!csvData) {
    alert("Primero arrastra un CSV");
    return;
  }

  const puntos = parseCSV(csvData);
  const grafico: Grafico = {
    titulo: "Cantidad de jóvenes por edad",
    puntos,
    color: "orange"
  };

  dibujarGrafico(grafico, contenedorId);
});
