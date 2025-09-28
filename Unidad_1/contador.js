let count = 0;

// Funciones flecha , ideales para callbacks y funciones pequeñas
const incrementar = () => {
  count++;
  console.log(`🔢 Aumentando    a : ${count}`);
};

const decrementar = () => {
  count--;
  console.log(`🔢 Decrementando a : ${count}`);
};

incrementar();
incrementar();
incrementar();
incrementar();
decrementar();
