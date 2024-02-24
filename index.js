import { Aluno } from './Aluno.js';
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { Livro } from './Livro.js';
import { Pessoa } from './Pessoa.js';

console.log('Byte Bank\n');

const cliente1 = new Cliente('Leonardo', '111.222.333-44');
const contaCorrente1 = new ContaCorrente(cliente1, '37649-3', '0959');

const cliente2 = new Cliente('Morita', '222.222.333-44');
const contaCorrente2 = new ContaCorrente(cliente2, '295836-8', '0959');

contaCorrente1.depositar(100);
contaCorrente2.depositar(100);
contaCorrente1.transferir(50, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2, '\n');

console.log(`Números de contas no banco: ${ContaCorrente.numeroDeContas}`, '\n');

const pessoa1 = new Pessoa('João', 25, 'Engenheiro');
pessoa1.apresentar();

console.log('');

const livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, 1178);
console.log(livro, '\n');

const aluno1 = new Aluno('Leonardo', 25, 'Curso Javascript');
console.log(aluno1);
