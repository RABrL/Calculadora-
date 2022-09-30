const $ = selector => document.querySelector(selector)
const display = $('.display')
const operador = document.querySelectorAll('.operador')
const numeros = document.querySelectorAll('.number')
const buttons = document.querySelectorAll('button')

buttons.forEach(numero =>{
    numero.addEventListener('click',(e)=>{
        /* const operations = {
            '/': (a,b)=> a/b,
            'x': (a,b)=> a*b,
            '+': (a,b)=> a+b,
            '-': (a,b)=> a-b,
            '%': (a)=> a/100
        }
        console.log(operations[e.target.innerText](1,2)) */
        const key = e.target.innerText
        if(key=='='){
            display.innerText=roundToTwo(eval(display.innerText))
        }else if(key == 'x') {
            display.append('*')
        }else if(key == 'DEL'){
            const arr= [...display.innerText] // convierto el contenido del display en un array de caracteres
            display.innerText = (arr.slice(0,arr.length-1)).join('') // Corto/extraigo todo el array excepto el ultimo caracter y lo convierto en string denuevo
        }else if(key == 'AC'){
            display.innerText = ''
        }else display.append(key)
    })
})

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}





























/* 
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
} */