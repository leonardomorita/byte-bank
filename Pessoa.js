export class Pessoa {
    constructor(nome, idade, profissao = '') {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    set nome(novoNome) {
        if (!novoNome) {
            return "Erro. O parâmetro 'novoNome' está com valor vazio.";
        } else if (typeof novoNome !== 'string') {
            return "Erro. O parâmetro 'novoNome' não é do tipo string.";
        }

        this._nome = novoNome;
    }

    set idade(novaIdade) {
        if (novaIdade < this._idade) {
            return "Erro: O parâmetro 'novaIdade' tem que ter o valor maior do que a atual.";
        }

        this._idade = novaIdade;
    }

    set profissao(novaProfissao) {
        if (typeof novaProfissao !== 'string') {
            return "Erro. O parâmetro 'novaProfissao' não é do tipo string.";
        }

        this._profissao = novaProfissao;
    }

    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade;
    }

    get profissao() {
        return this._profissao;
    }

    apresentar() {
        console.log('Informações');
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Profissão: ${this.profissao}`);
    }
}
