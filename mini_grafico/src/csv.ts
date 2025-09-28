import type { Punto } from "./tipos";

export function parseCSV(text: string): Punto[] {
  const lines = text.trim().split("\n");
  const edadesCount: Record<string, number> = {};

  // Suponemos CSV con encabezado: nombre,edad
  for (let i = 1; i < lines.length; i++) {
    const [nombre, edad] = lines[i].split(",");
    if (!edad) continue;
    edadesCount[edad] = (edadesCount[edad] || 0) + 1;
  }

  return Object.entries(edadesCount).map(([edad, count]) => ({
    x: edad,
    y: count
  }));
}
