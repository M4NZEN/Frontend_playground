import type { Grafico } from "./tipos";

export function dibujarGrafico(g: Grafico, contenedorId: string) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  contenedor.innerHTML = `<h2>${g.titulo}</h2>`;
  const barrasContainer = document.createElement("div");
  barrasContainer.style.display = "flex";
  barrasContainer.style.gap = "5px";

  g.puntos.forEach(p => {
  const barraWrapper = document.createElement("div");
  barraWrapper.style.display = "flex";
  barraWrapper.style.flexDirection = "column";
  barraWrapper.style.alignItems = "center";
  barraWrapper.style.justifyContent = "flex-end"; // importante para que la barra crezca desde la base
  barraWrapper.style.height = "200px"; // altura fija del gráfico

  // Valor Y encima de la barra
  const valor = document.createElement("span");
  valor.textContent = p.y.toString();
  valor.style.marginBottom = "5px";

  // La barra
  const barra = document.createElement("div");
  barra.style.width = "30px";
  barra.style.height = `${p.y * 10}px`; // altura proporcional a Y
  barra.style.backgroundColor = g.color || "blue";

  // Label X debajo de la barra
  const label = document.createElement("span");
  label.textContent = p.x.toString();
  label.style.marginTop = "5px";

  barraWrapper.appendChild(valor);
  barraWrapper.appendChild(barra);
  barraWrapper.appendChild(label);

  barrasContainer.appendChild(barraWrapper);
});



  contenedor.appendChild(barrasContainer);
}
