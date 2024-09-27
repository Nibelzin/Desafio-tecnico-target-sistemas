// Dados sobre o faturamento mensal de uma distribuidora

const dados = [
    { nome: "SP", faturamento: 67836.43},
    { nome: "RJ", faturamento: 36678.66},
    { nome: "MG", faturamento: 29229.88},
    { nome: "ES", faturamento: 27165.84},
    { nome: "Outros", faturamento: 19849.53}
]

let faturamentoTotal = 0

for(estado of dados){
    faturamentoTotal += estado.faturamento
}

const percentualPorEstado = []

for(estado of dados){
    const faturamentoPorcentagem = estado.faturamento / faturamentoTotal * 100
    percentualPorEstado.push({ estado: estado.nome, faturamentoPorcentagem})
    console.log(`Estado: ${estado.nome}, Porcentagem do faturamento: ${faturamentoPorcentagem.toFixed(2)}%`)
}


