function procesar(n , callback) {
    console.log("Procesando...");
    callback(n*3);
}   

procesar(2, resultado=>{
    console.log("Respuesta obtenida: " + resultado); 
    console.log("Proceso terminado");
});