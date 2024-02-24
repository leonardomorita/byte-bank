export class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }

    set nome(novoNome) {
        if (!novoNome) {
            return "Erro. O parâmetro 'novoNome' está com valor vazio.";
        } else if (typeof novoNome !== 'string') {
            return "Erro. O parâmetro 'novoNome' não é do tipo string.";
        }

        this._nome = novoNome;
    }

    get nome() {
        return this._nome;
    }

    get cpf() {
        return this._cpf;
    }
}
