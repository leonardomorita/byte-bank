export class Livro {
    constructor(titulo, autor, anoPublicacao, numeroPaginas) {
        this._titulo = titulo;
        this._autor = autor;
        this._anoPublicacao = anoPublicacao;
        this._numeroPaginas = numeroPaginas;
        this._status = 'disponivel';
    }

    emprestar() {
        if (this._status != 'disponivel') {
            return 'Erro. Este livro está emprestado.'
        }

        this._status = 'emprestado';

        return this;
    }

    devolver() {
        if (this._status != 'emprestado') {
            return 'Erro. O livro já está disponível.';
        }

        this._status = 'disponivel';

        return true;
    }
}