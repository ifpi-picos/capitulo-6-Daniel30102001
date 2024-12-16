// Função para solicitar um número ao usuário
const solicitarNumero = mensagem => {
    const numero = parseFloat(prompt(mensagem));
    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return solicitarNumero(mensagem); // Solicita novamente se a entrada não for válida
    }
    return numero;
};

// Função para calcular a média de dois números
const calcularMedia = (num1, num2) => (num1 + num2) / 2;

// Função principal do programa
const programaMedia = () => {
    const numero1 = solicitarNumero("Digite o primeiro número:");
    const numero2 = solicitarNumero("Digite o segundo número:");
    const media = calcularMedia(numero1, numero2);
    alert(`A média dos números ${numero1} e ${numero2} é: ${media}`);
};

// Executa o programa
programaMedia();
