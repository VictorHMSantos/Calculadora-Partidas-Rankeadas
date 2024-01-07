//Variável heroi armazena informações de 3 heróis: nome, vitórias e derrotas
let heroi = [["Célio Jr", 230, 50], ["Ghost", 50, 12], ["Grego", 80, 70]]
let saldoVitórias
let ranking

//Função para encontrar o saldo de vitórias
function balance(victorys, defeats) {
    let resultado = victorys - defeats
    return resultado
}

//Função para encontrar o nível do herói
function level(saldoVitorias) {
    let saida
    if (saldoVitorias <= 10) {
        saida = "Ferro"
    } else if ((saldoVitorias > 10) && (saldoVitorias <= 20)) {
        saida = "Bronze"
    } else if ((saldoVitorias > 20) && (saldoVitorias <= 50)) {
        saida = "Prata"
    } else if ((saldoVitorias > 50) && (saldoVitorias <= 80)) {
        saida = "Ouro"
    } else if ((saldoVitorias > 80) && (saldoVitorias <= 90)) {
        saida = "Diamante"
    } else if ((saldoVitorias > 90) && (saldoVitorias <= 100)) {
        saida = "Lendário"
    } else if (saldoVitorias > 100) {
        saida = "Imortal"
    }
    return saida
}

//Laço de repetição para saber as informações dos heróis
for (let i = 0; i < heroi.length; i++) {
    saldoVitorias = balance(heroi[i][1], heroi [i][2])
    ranking = level(saldoVitorias)
    console.log("O Herói " + (i+1) + " tem de saldo de " + saldoVitorias + " vitórias e está no nível " + ranking)
}