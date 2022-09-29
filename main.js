const $ = selector => document.querySelector(selector)
const display = $('.display')
const valor = document.querySelector('.value')
const operador = $('.operador')
const suma = $('#sumar')
const resta = $('#restar')
const mult = $('#multiplicar')
const div = $('#division')
const result = $('#igual')
const borrar = $('#borrar')

let firstNumber

suma.addEventListener('click',()=>elegirOperador(suma.textContent))

resta.addEventListener('click',()=>elegirOperador(resta.textContent))

mult.addEventListener('click',()=>elegirOperador(mult.textContent))

div.addEventListener('click',()=>elegirOperador(div.textContent))

borrar.addEventListener('click',limpiar)

result.addEventListener('click', resultado)

function elegirOperador(symbol){
    operador.textContent= symbol
    firstNumber = +valor.value
    valor.value = ''
}

function limpiar(){
    display.textContent = ''
    valor.value = ''
    operador.textContent = ''
}

function resultado() {
    switch(operador.textContent){
        case '+': 
            display.innerText = firstNumber + +valor.value
            break;
        case '-': 
            display.innerText = firstNumber - +valor.value
            break;
        case 'x': 
            display.innerText = firstNumber * +valor.value
            break;
        case '/': 
            display.innerText = firstNumber / +valor.value
            break;
    }
    valor.value = ''
    operador.textContent=''
}