const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminarUltima = document.getElementById("btnEliminarUltima");
const listaTareas = document.getElementById("listaTareas");
const tareaTemplate = document.getElementById("tareaTemplate");

// Función para agregar tarea
btnAgregar.addEventListener("click", () => {
    const texto = inputTarea.value.trim();
    if(texto === "") return; // no agregar tareas vacías

    // Clonar template
    const clone = tareaTemplate.content.cloneNode(true);
    clone.querySelector(".texto").innerText = texto;

    // Agregar al fragmento y luego al DOM
    listaTareas.appendChild(clone);
    inputTarea.value = "";
});

// Delegación de eventos para marcar completadas o eliminar
listaTareas.addEventListener("click", (e) => {
    const li = e.target.closest("li"); // obtener el li más cercano
    if(!li) return;

    if(e.target.classList.contains("btnEliminar")) {
        li.remove(); // eliminar tarea
    } else {
        li.classList.toggle("completada"); // marcar/desmarcar
    }
});

// Botón para eliminar última tarea
btnEliminarUltima.addEventListener("click", () => {
    const ultima = listaTareas.lastElementChild;
    if(ultima) ultima.remove();
});
