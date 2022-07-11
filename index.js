let botaoClicavel = document.getElementsByClassName('botao')
botaoClicavel.addEventListener('click', clicked)
let email = document.getElementById('userCadastro')

function clicked(){
    botaoClicavel.style.background = 'rgb(150,60,250)'
    botaoClicavel.innerHTML = `Loading...` // descobrir como mudar o valor
    if (email == ''){
        alert('[ERRO]')
    }
}