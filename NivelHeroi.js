let Nome = 'Cassandra';
let XP = 7200
let Categoria = ''

if( XP <= 1000){
    Categoria = 'Ferro'
} else if (XP > 1000 && XP <= 2000){
    Categoria = 'Bronze'
} else if (XP > 2000 && XP <= 3000) {
    Categoria = 'Prata'
} else if (XP > 3000 && XP <= 4000) {
    Categoria = 'Ouro'
} else if (XP > 4000 && XP <= 5000) {
    Categoria = 'Platina'
} else if (XP > 5000 && XP <= 6000) {
    Categoria = 'Diamante'
} else if (XP > 6000 && XP <= 7000) {
    Categoria = 'Ascendente'
} else if (XP > 7000 && XP <= 8000) {
    Categoria = 'Imortal'
} else if (XP > 8000 && XP <= 9000) {
    Categoria = 'Radiante'
} else if (XP > 9000 && XP <= 10000) {
    Categoria = 'Lendário'
}

console.log(`O Herói de nome ${Nome} está no nível de ${Categoria}`)