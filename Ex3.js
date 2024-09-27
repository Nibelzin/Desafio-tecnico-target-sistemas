// Dados sobre o faturamento diario de uma distribuidora

const dados = require('./dados.json')

let valorTotal = 0
let diasUteis = 0

for(dia of dados){
    valorTotal += dia.valor
    dia.valor !== 0 && diasUteis++
}

let media = valorTotal / diasUteis

let menorFaturamento = media
let maiorFaturamento = media
let diasAcimaDaMedia = 0

for(dia of dados){
    if(dia.valor !== 0){
        if(menorFaturamento > dia.valor){
            menorFaturamento = dia.valor
        }
        if(maiorFaturamento < dia.valor){
            maiorFaturamento = dia.valor
        }
        if(dia.valor > media){
            diasAcimaDaMedia++
        }
    }
}

const converterParaReal = valor => {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

menorFaturamento = converterParaReal(menorFaturamento)
maiorFaturamento = converterParaReal(maiorFaturamento)

console.log(`O menor faturamento ocorrido em um dia do mês foi ${menorFaturamento}`)
console.log(`O maior faturamento ocorrido em um dia do mês foi ${maiorFaturamento}`)
console.log(`O faturamento ficou maior que a média mensal ${diasAcimaDaMedia} dias`)


