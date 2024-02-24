import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    set curso(novoCurso) {
        if (!novoCurso) {
            return "Erro. O parâmetro 'novoCurso' está com valor vazio.";
        } else if (typeof novoCurso !== 'string') {
            return "Erro. O parâmetro 'novoCurso' não é do tipo string.";
        }

        this._curso = novoCurso;
    }

    get curso() {
        return this._curso;
    }
}