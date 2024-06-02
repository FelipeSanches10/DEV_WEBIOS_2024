class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }

    contaPoupanca() {
        const taxa = 0.015;
        const novoSalario = this.salario - (this.salario * taxa);
        return novoSalario;
    }

    contaCorrente() {
        const taxa = 0.036;
        const novoSalario = this.salario - (this.salario * taxa)
        return novoSalario;
    }

    contaEstudante() {
        const taxa = 0.012;
        const novoSalario = this.salario - (this.salario * taxa);
        return novoSalario;
    }

    printDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Salario: ${this.salario.toFixed(2)}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Agência: ${this.agencia}`);
        console.log(`Conta: ${this.conta}`);
        console.log(`Número da conta: ${this.numeroConta}`);
    }
}

const contaPoupanca = new ContaBancaria('Felipe', 30, 5000, 'Masculino', '001', 'Poupança', '123456-7');
const contaCorrente = new ContaBancaria('Felipe', 45, 7000, 'Masculino', '002', 'Estudante', '765432-1');
const contaEstudante = new ContaBancaria('Felipe', 22, 3000, 'Masculino', '003', 'Corrente', '112233-4');


console.log("Conta Poupança:");
contaPoupanca.imprimirDados();
console.log(`Novo Salário com taxa aplicada: R$${contaPoupanca.contaPoupanca().toFixed(2)}`);
console.log();

console.log("Conta Corrente:");
contaCorrente.imprimirDados();
console.log(`Novo Salário com taxa aplicada: R$${contaCorrente.contaCorrente().toFixed(2)}`);
console.log();

console.log("Conta Estudante:");
contaEstudante.imprimirDados();
console.log(`Novo Salário com taxa aplicada: R$${contaEstudante.contaEstudante().toFixed(2)}`);
console.log();