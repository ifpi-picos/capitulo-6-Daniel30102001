//questao 12 completa

// Função para somar dois números
const adicionar = (num1, num2) => num1 + num2;

// Função para subtrair dois números
const subtrair = (num1, num2) => num1 - num2;

// Função para multiplicar dois números
const multiplicar = (num1, num2) => num1 * num2;

// Função para dividir dois números
const dividir = (num1, num2) => {
    if (num2 === 0) {
        alert("Erro! Não é possível dividir por zero.");
        return null; // Retorna null para evitar erro de divisão por zero
    }
    return num1 / num2;
};

// Função para exibir o resultado da operação
const exibirResultado = (resultado) => {
    if (resultado !== null) {
        alert(`O resultado da operação é: ${resultado}`);
    }
};

// Função principal da calculadora
const calcular = () => {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    
    const operacao = prompt("Escolha a operação: (+ para adição, - para subtração, * para multiplicação, / para divisão)");

    let resultado;

    switch (operacao) {
        case '+':
            resultado = adicionar(num1, num2);
            break;
        case '-':
            resultado = subtrair(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            resultado = dividir(num1, num2);
            break;
        default:
            alert("Operação inválida! Por favor, escolha uma operação válida.");
            return;
    }

    exibirResultado(resultado);
};

// Inicia a calculadora
calcular();
