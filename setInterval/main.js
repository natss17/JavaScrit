//JAVASCRIPT 
let contador = 0
let Intervalo
function iniciarContador() {
  intervalo = setInterval(function() {
    contador++
    console.log("Contador: " + contador)
  }, 1000)
}

function pararContador() {
  clearInterval(intervalo)
}

iniciarContador()