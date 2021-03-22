var valorEmDolar = prompt("Qual o valor em dólar que você quer converter?")

let valorNum = parseFloat(valorEmDolar)

var valorEmReal = valorNum * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2)
alert("O valor em R$ é: " + valorEmRealFixado)