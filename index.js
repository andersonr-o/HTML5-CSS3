// Solução criada por mim:

/*const data = new Date();
const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();

function dataAtual (diaSemana){
    let diaHoje
    switch (diaSemana){
        case 0:
            diaHoje = 'Domingo'
            return diaHoje
        case 1:
            diaHoje = 'Segunda-feira'
            return diaHoje
        case 2:
            diaHoje = 'Terça-feira'
            return diaHoje
        case 3:
            diaHoje = 'Quarta-feira'
            return diaHoje
        case 4:
            diaHoje = 'Quinta-feira'
            return diaHoje
        case 5:
            diaHoje = 'Sexta-feira'
            return diaHoje
        case 6:
            diaHoje = 'Sábado'
            return diaHoje
    }
}

function mesAtual (mes){
    let mesAgora
    switch (mes){
        case 0:
        mesAgora = 'Janeiro'
        case 1:
            mesAgora = 'Fevereiro'
            return mesAgora
        case 2:
            mesAgora = 'Março'
            return mesAgora
        case 3:
            mesAgora = 'Abril'
            return mesAgora
        case 4:
            mesAgora = 'Maio'
            return mesAgora
        case 5:
            mesAgora = 'Junho'
            return mesAgora
        case 6:
            mesAgora = 'Julho'
            return mesAgora
        case 7:
            mesAgora = 'Agosto'
            return mesAgora
        case 8:
            mesAgora = 'Setembro'
            return mesAgora
        case 9:
            mesAgora = 'Outubro'
            return mesAgora
        case 10:
            mesAgora = 'Novembro'
            return mesAgora
        case 11:
            mesAgora = 'Dezembro'
            return mesAgora
    }
}

const diaHoje = dataAtual(diaSemana)
const mesAgora = mesAtual(mes)

const minutoFormatado = minuto => minuto >= 10 ? minuto : `0${minuto}`

function mensagem (diaHoje){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = `${diaHoje}, ${dia} de ${mesAgora} de ${ano}, ${hora}:${minutoFormatado(minuto)}`
    return resultado
}

mensagem(diaHoje)*/











// Solução mais curta:

/*const data = new Date();
const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();

function dataAtual (diaSemana){
    const diaHoje = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    return diaHoje[diaSemana]
}

function mesAtual (mes){
    const mesAgora = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return mesAgora[mes]
}

const diaHoje = dataAtual(diaSemana)
const mesAgora = mesAtual(mes)

const minutoFormatado = minuto => minuto >= 10 ? minuto : `0${minuto}`

function mensagem (diaHoje){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = `${diaHoje}, ${dia} de ${mesAgora} de ${ano}, ${hora}:${minutoFormatado(minuto)}`
    return resultado
}

mensagem(diaHoje)*/
















// Melhor solução:
const data = new Date();
const resultado = document.querySelector('#resultado');
resultado.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });  