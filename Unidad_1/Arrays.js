const compras = ["pan", "leche", "huevos", "carne", "verduras"];

// Destrcturing 
const [item1, item2] = compras;
// formateamos con template literals , respetar los backstricks `` alt+96
console.log('${item1}, ${item2}');

// Spread
const masCompras = [ ...compras, "frutas", "snacks" ];
console.log(masCompras);

