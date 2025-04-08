//main.js

//Funções Matemáticas
let numero = 4.7

//Arredondar numeros
console.log(Math.round(numero)) // Inteiro mais próximo
console.log(Math.floor(numero)) // Arrerda para baixo
console.log(Math.ceil(numero)) // Arredonda para cima
// Numero aleatório
console.log(Math.random()) // Numero aleatório entre 0 e 1
console.log(Math.random() * 10) // Numero aleatório entre 0 e 10

//Funções de String
let texto = " Eu amo javaScript"
//Manipular String 
console.log(texto.toUpperCase()) //Deixa tudo maiusculo 
console.log(texto.toLocaleLowerCase()) //Deixa tudo minusculo
console.log(texto.trim()) //Remove espaços antes e depois do texto
//Localizar texto 
console.log(texto.charAt(5)) //mostra a letra que está nessa posição
console.log(texto.includes("javasScript"))// verificar se tem palavra)
// Trocar texto 
console.log(texto.replace("amo", "adora"))

// Funções Numéricas
let num = "42.85"
console.log(parseInt(num)) // converte String para número inteiro
console.log(parseFloat(num)) // converte String para número decimal
console.log(Number(num).toFixed(1)) // Define quantas casas decimais vai mostrar