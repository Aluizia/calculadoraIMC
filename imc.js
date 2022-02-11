var nome = document.getElementById('name')
var altura = document.getElementById('altura')
var peso = document.getElementById('peso')
var resultado = document.querySelector('.resultado')

function calcular() {
    if(nome.value != "" && altura.value != "" && peso.value !="") {
        var imc = (peso.value / Math.pow(altura.value, 2)).toFixed(1)
        resultado.innerHTML = `O IMC de ${nome.value} é: ${imc}`
    } else {
        resultado.innerHTML = 'Informe todos os campos!'
    }
}

