const body = document.body;

const botonClaro = document.getElementById("tema-claro");
const botonOscuro = document.getElementById("tema-oscuro");
const botonContraste = document.getElementById("tema-contraste");
const contadorElemento = document.getElementById("contador");

let contador = 0;

const TEMA_KEY = "temaSeleccionado";

function guardarTema(tema) {
  localStorage.setItem(TEMA_KEY, tema);
}

function cargarTemaGuardado() {
  const temaGuardado = localStorage.getItem(TEMA_KEY);
  if (temaGuardado) {
    eliminarClasesDeTema();
    body.classList.add(temaGuardado);
  }
}

function eliminarClasesDeTema() {
  body.classList.remove("tema-claro", "tema-oscuro", "tema-contraste");
}

function actualizarContador() {
  contador++;
  contadorElemento.textContent = contador;
}

botonClaro.addEventListener("click", () => {
  eliminarClasesDeTema();
  body.classList.add("tema-claro");
  guardarTema("tema-claro");
  actualizarContador();
});

botonOscuro.addEventListener("click", () => {
  eliminarClasesDeTema();
  body.classList.add("tema-oscuro");
  guardarTema("tema-oscuro");
  actualizarContador();
});

botonContraste.addEventListener("click", () => {
  eliminarClasesDeTema();
  body.classList.add("tema-contraste");
  guardarTema("tema-contraste");
  actualizarContador();
});

cargarTemaGuardado();
