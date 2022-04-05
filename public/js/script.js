const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");

setTimeout(() => {
  fadeOut(closeMessage, 1);
  fadeOut(message, 1);
}, 5000);
setTimeout(() => {
  message.style.display = "none";
}, 5500);
function fadeIn(element, time) {
  processa(element, time, 0, 100);
}

function fadeOut(element, time) {
  processa(element, time, 100, 0);
}

function processa(element, time, initial, end) {
  if (initial == 0) {
    increment = 2;
    element.style.display = "block";
  } else {
    increment = -2;
  }
  opc = initial;
  intervalo = setInterval(function () {
    if (opc == end) {
      if (end == 0) {
        element.style.display = "none";
      }
      clearInterval(intervalo);
    } else {
      opc += increment;
      element.style.opacity = opc / 100;
      element.style.filter = "alpha(opacity=" + opc + ")";
    }
  }, time * 10);
}
function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
  var botao = document.getElementById("meuBotao");

  if (display == "none") {
    document.getElementById(el).style.display = "block";
    botao.innerHTML = "Esconder";
  } else {
    document.getElementById(el).style.display = "none";
    botao.innerHTML = "Mostrar";
  }
}
