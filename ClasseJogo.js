class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }

    ataque(){
        switch (this.tipo.toLowerCase()){
            case "mago":
                console.log(`o ${this.tipo} ataca com Magia`)
                break;

            case "guerreiro":
                console.log(`o ${this.tipo} ataca com Espada`)
                break;

            case "monge":
                console.log(`o ${this.tipo} ataca com Artes Marciais`)
                break;

            case "ninja":
                console.log(`o ${this.tipo} ataca com Shuriken`)
                break;

            default:
                console.log("classe inexistente")
        }
    }
}

let obj1 = new Heroi("Cassandra", 21, "guerreiro")
let obj2 = new Heroi("Matheus", 17, "mago")

// Agora chamando o método ataque corretamente
console.log(`${obj1.nome}\n${obj1.idade}\n${obj1.tipo}`);
obj1.ataque(); // Chama o método ataque para obj1

console.log(`${obj2.nome}\n${obj2.idade}\n${obj2.tipo}`);
obj2.ataque(); // Chama o método ataque para obj2