import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0

    constructor(cliente, numero, agencia) {
        this.cliente = cliente;
        this._numero = numero;
        this._agencia = agencia;
        this._saldo = 0;
        this._limite = 0;

        ContaCorrente.numeroDeContas += 1;
    }

    set cliente(novoCliente) {
        if (!(novoCliente instanceof Cliente)) {
            return "Erro: O parâmetro 'novoCliente' precisa ser do tipo Cliente.";
        }

        this._cliente = novoCliente;
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log('Erro: Valor precisa ser maior que 0.');
            return false;
        }

        this._saldo += valor;

        return true;
    }

    sacar(valor) {
        if (valor <= 0) {
            console.log('Erro: Valor precisa ser maior que 0.');
            return false;
        } else if (valor > this._saldo) {
            console.log('Erro: Saldo indisponível.');
            return false;
        }

        this._saldo -= valor;

        return valor;
    }

    transferir(valor, contaDestino) {
        if (valor <= 0) {
            console.log('Erro: Valor da transferência precisa ser maior que 0.');
            return false;
        } else if (!(contaDestino instanceof ContaCorrente)) {
            console.log('Erro: O atributo contaDestino precisa ser uma instância da classe ContaCorrente.');
            return false;
        } else if (valor > this._saldo) {
            console.log('Erro: Conta origem não tem saldo suficiente para fazer essa transferência.');
            return false;
        }

        if (this.sacar(valor)) {
            return contaDestino.depositar(valor);
        }
    }
}
