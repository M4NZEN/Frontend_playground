const p1boton = document.getElementById("btnClick");
const p2boton = document.getElementById("btnDoble");
const texto = document.getElementById("texto");

p1boton.addEventListener("click", () => {
    texto.textContent = "click primero";

});

p2boton.addEventListener("dblclick", () => {
    texto.textContent = "click segundo";
});

