// Função para solicitar o valor em Real ao usuário
const solicitarValorEmReal = () => {
    const valorReal = parseFloat(prompt("Digite o valor em Real (BRL) que deseja converter para Dólar (USD):"));
    if (isNaN(valorReal) || valorReal <= 0) {
        alert("Por favor, insira um valor válido maior que zero.");
        return solicitarValorEmReal(); // Solicita novamente se o valor for inválido
    }
    return valorReal;
};

// Função para realizar a conversão de Real para Dólar
const converterParaDolar = (valorReal, taxaDeCambio) => valorReal / taxaDeCambio;

// Função para exibir o resultado da conversão
const exibirResultado = (valorEmDolar) => {
    alert(`O valor convertido é: US$ ${valorEmDolar.toFixed(2)}`);
};

// Função principal do conversor
const conversorDeMoeda = () => {
    const taxaDeCambio = 5.00; // Taxa de câmbio: 1 USD = 5 BRL
    const valorEmReal = solicitarValorEmReal();
    const valorEmDolar = converterParaDolar(valorEmReal, taxaDeCambio);
    exibirResultado(valorEmDolar);
};

// Inicia o conversor
conversorDeMoeda();
