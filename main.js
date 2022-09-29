const $ = selector => document.querySelector(selector)
const display = $('.display')
const valor = document.querySelectorAll('.value')
const operador = $('.operador')
const suma = $('#sumar')
const resta = $('#restar')
const mult = $('#multiplicar')
const div = $('#division')
const result = $('#igual')
const borrar = $('#borrar')

suma.addEventListener('click',()=>{
    operador.textContent='+'
})

resta.addEventListener('click',()=>{
    operador.textContent='-'
})

mult.addEventListener('click',()=>{
    operador.textContent='x'
})

div.addEventListener('click',()=>{
    operador.textContent='/'
})

borrar.addEventListener('click',()=>{
    operador.textContent=''
    display.textContent = ''
    for(let i=0; i<valor.length;i++){
        valor[i].value = ''
    }
})

result.addEventListener('click', resultado)

function resultado() {
    switch(operador.textContent){
        case '+': 
            display.innerText = +valor[0].value + +valor[1].value
            break;
        case '-': 
            display.innerText = +valor[0].value - +valor[1].value
            break;
        case 'x': 
            display.innerText = +valor[0].value * +valor[1].value
            break;
        case '/': 
            display.innerText = +valor[0].value / +valor[1].value
            break;
    }
    for(let i=0; i<valor.length;i++){
        valor[i].value = ''
    }
    operador.textContent=''
}