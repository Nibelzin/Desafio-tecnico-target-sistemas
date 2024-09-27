// Inverter os caracteres de uma string

const palavra = "Paralelo"

let palavraInvertida = []
for(letra in palavra){
    palavraInvertida.unshift(palavra.charAt(letra))
}

palavraInvertida = palavraInvertida.join('')

console.log(palavraInvertida)

