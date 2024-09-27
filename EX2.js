// Informar se um valor pertence a sequencia de Fibonacci

let valor = 21

const isInFibonacci = valor => {
    let valorAtual = 0
    let ultimoValor = 0
    let proximoValor = 0
    let isInFibonacci = false
    while(valorAtual < valor){
        if(valorAtual === 0){
            valorAtual++
        } else {
           proximoValor = valorAtual + ultimoValor
           ultimoValor = valorAtual
           valorAtual = proximoValor
        }
        if(valorAtual === valor){
            isInFibonacci = true
        }
    }

    if(isInFibonacci === true){
        console.log(`O numero ${valor} pertence a sequencia de Fibonacci!`)
    } else {
        console.log(`O número ${valor} não pertence a sequencia de Fibonacci`)
    }
}

isInFibonacci(valor)