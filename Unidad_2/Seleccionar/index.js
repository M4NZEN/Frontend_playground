// Selección por ID
const elementoPorId = document.getElementById("titulo");
console.log("getElementById:", elementoPorId);

// Selección por clase
const elementosPorClase = document.getElementsByClassName("resaltado");
console.log("getElementsByClassName:", elementosPorClase);

// Selección por tag
const elementosPorTag = document.getElementsByTagName("div");
console.log("getElementsByTagName:", elementosPorTag);

// Primer elemento que coincida con selector CSS
const primerQuery = document.querySelector(".resaltado");
console.log("querySelector:", primerQuery);

// Todos los elementos que coincidan con selector CSS
const todosQuery = document.querySelectorAll(".resaltado");
console.log("querySelectorAll:", todosQuery);

// Cambiar estilo de todos los elementos con querySelectorAll
todosQuery.forEach(el => {
    el.style.backgroundColor = "yellow";
});

// Ejemplo de evento para practicar
const boton = document.getElementById("btnClick");
boton.addEventListener("click", () => {
    alert("¡Botón clickeado!");
});
