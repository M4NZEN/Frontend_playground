export interface Punto {
  x: number;   // edad
  y: number;   // cantidad de jóvenes
}

export interface Grafico {
  titulo: string;
  puntos: Punto[];
  color?: string;
}
