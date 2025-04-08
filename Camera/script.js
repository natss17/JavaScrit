// CAMERA -> SCRIPT 
const video = document.getElementById("video")

navigator.medidaDevices.getUserMedia({video : true})
.then(stream => {
    video.srcObject = stream
})
.cath(erro => {
    alert("Não foi possivel acessar a imagem")
})