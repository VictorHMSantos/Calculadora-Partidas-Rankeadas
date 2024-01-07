//Variável heroi armazena informações de 3 heróis: nome, vitórias e derrotas
let heroi = [["Célio Jr", 230, 50], ["Ghost", 50, 12], ["Grego", 80, 70]]
let saldoVitórias
let ranking

//Função para encontrar o nível do herói
function level(saldoVitorias) {
    if (saldoVitorias <= 10) {
        return "Ferro"
    } else if ((saldoVitorias > 10) && (saldoVitorias <= 20)) {
        return "Bronze"
    } else if ((saldoVitorias > 20) && (saldoVitorias <= 50)) {
        return "Prata"
    } else if ((saldoVitorias > 50) && (saldoVitorias <= 80)) {
        return "Ouro"
    } else if ((saldoVitorias > 80) && (saldoVitorias <= 90)) {
        return "Diamante"
    } else if ((saldoVitorias > 90) && (saldoVitorias <= 100)) {
        return "Lendário"
    } else if (saldoVitorias > 100) {
        return "Imortal"
    }
}

//Laço de repetição para saber as informações dos heróis
for (let i = 0; i < heroi.length; i++) {
    saldoVitorias = (heroi[i][1] - heroi [i][2])
    ranking = level(saldoVitorias)
    console.log("O Herói " + heroi[i][0] + " tem de saldo de " + saldoVitorias + " vitórias e está no nível " + ranking)
}