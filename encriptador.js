var botonEncriptar = document.querySelector("#button-encriptar");
var botonDesencriptar = document.querySelector("#button-desencriptar");
var botonCopiar = document.querySelector("#button-copy");

function pintarResultado(dato) {
  var resultadoPlaceholder = document.querySelector("#resultado-placeholder");
  var resultadoContainer = document.querySelector("#resultado-container");
  var resultado = document.querySelector("#resultado");

  resultadoPlaceholder.classList.add("hidden");
  resultadoContainer.classList.remove("hidden");
  resultado.textContent = dato;
}

function encriptar() {
  var textoEntrada = document.querySelector("#text-input").value;

  var listaDeLetras = textoEntrada.split("");
  var listaEncriptada = listaDeLetras.map(function (letra) {
    if (letra === "e") {
      return "enter";
    }
    if (letra === "i") {
      return "imes";
    }
    if (letra === "a") {
      return "ai";
    }
    if (letra === "o") {
      return "ober";
    }
    if (letra === "u") {
      return "ufat";
    }
    return letra;
  });
  var resultado = listaEncriptada.join("");

  pintarResultado(resultado);
}

function desencriptar() {
  // obtener el texto
  var textoEntrada = document.querySelector("#text-input").value;
  // encriptar el texto
  var resultado = textoEntrada
    .split("enter")
    .join("e")
    .split("imes")
    .join("i")
    .split("ai")
    .join("a")
    .split("ober")
    .join("o")
    .split("ufat")
    .join("u");

  // pintar el texto encriptado
  pintarResultado(resultado);
}

function copiarResultado() {
  var parrafoResultado = document.querySelector("#resultado");
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(parrafoResultado.innerHTML);
  }
}

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiarResultado);
