var thanks = window.document.getElementById('h1dif')
var cor = window.document.getElementById('votou')
var box = window.document.getElementById('votos')
/*Ou usamos -> cor.addEventListener('click', corsim)*/

function corsim(){
    cor.style.background = 'aqua'
    thanks.innerHTML = 'OBRIGADO POR VOTAR!'
    if(Number(box.value) >= 5 || Number(box.value) <= 0){
        window.alert(`Insira um número válido`)
    }else{
        alert(`ok`)
    }
 }

function n1(){
    thanks.style.color  = 'darkblue'
    }

function n2(){
    thanks.style.color  = 'darkblue'
}

function n3(){
    thanks.style.color  = 'darkblue'
}

function n4(){
    thanks.style.color  = 'darkblue'
}

function x(){
    body.style.background = 'blue'
}