let contador: number = 0;

const display = document.getElementById('contador') as HTMLSpanElement;
const btnSumar = document.getElementById('sumar') as HTMLButtonElement;
const btnRestar = document.getElementById('restar') as HTMLButtonElement;

btnSumar.addEventListener('click', () => {
  contador+=2;
  display.textContent = contador.toString();
});

btnRestar.addEventListener('click', () => {
  contador--;
  display.textContent = contador.toString();
});
