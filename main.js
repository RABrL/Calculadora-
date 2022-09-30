const $ = selector => document.querySelector(selector)
const display = $('.display')
const operador = document.querySelectorAll('.operador')
const numeros = document.querySelectorAll('.number')

window.addEventListener('keydown', sePresionoUnaTecla)

function sePresionoUnaTecla(e){
   console.log(e)
   filtrarTecla(e.key)
}

function filtrarTecla(tecla){
    const teclasPosibles = ['1','2','3','4','5','6','7','8','9','0','.']
    const operadoresPosibles = ['+','-','*','/','%']

    if(operadoresPosibles.includes(tecla)) operadores(tecla)

    if(teclasPosibles.includes(tecla)){
        display.append(tecla)
    }
}

function operadores(operador) {
    switch(operador){
        case '+':
    }
}