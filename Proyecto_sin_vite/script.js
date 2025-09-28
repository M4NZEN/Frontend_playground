var contador = 0;
var display = document.getElementById('contador');
var btnSumar = document.getElementById('sumar');
var btnRestar = document.getElementById('restar');
btnSumar.addEventListener('click', function () {
    contador++;
    display.textContent = contador.toString();
});
btnRestar.addEventListener('click', function () {
    contador--;
    display.textContent = contador.toString();
});
