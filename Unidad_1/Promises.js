const miPromesa = new Promise((resolve, reject) => {
    let pizza = true;
    if (pizza) {
        resolve('pizza listo');
    } else {
        reject('pizza no listo');
    }
});

//consumir la promesa , ejecutar acciones cuando se cumple o no

miPromesa 
    .then(console.log("La promesa se ha cumplido"))
    .catch(console.log("La promesa no se ha cumplido"))
    .finally(console.log("La promesa se ha ejecutado"));
