let rs = require("readline-sync")

console.log("Calculador de IMC")

let nome = rs.question("Qual o seu nome?")

console.log("Seja bem vindo" + nome + "! Vamos calcular o seu IMC.")

let peso = parseFloat(rs.question("Qual o seu peso atual? "))

let altura = parseFloat(rs.question("Qual a sua altura? "))

let imc = parseFloat(peso / (altura * altura))

console.log("Seu IMC é de: " + imc)