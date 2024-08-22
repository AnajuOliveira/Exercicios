function Rank(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    let categoria = "";

    if (resultado <= 10) {
        categoria = "Ferro";
    } else if (resultado > 10 && resultado <= 20) {
        categoria = "Bronze";
    } else if (resultado > 20 && resultado <= 50) {
        categoria = "Prata";
    } else if (resultado > 50 && resultado <= 80) {
        categoria = "Ouro";
    } else if (resultado > 80 && resultado <= 90) {
        categoria = "Diamante";
    } else if (resultado > 90 && resultado <= 100) {
        categoria = "Lendário";
    } else if (resultado > 100) {
        categoria = "Imortal";
    }

    return { resultado, categoria };
}

let Jogos = Rank(40, 5);
console.log(`Número de vitórias: ${Jogos.resultado}\nCategoria: ${Jogos.categoria}`);
