// Função para solicitar o peso ao usuário
const solicitarPeso = () => {
    const peso = parseFloat(prompt("Digite seu peso (em kg):"));
    if (isNaN(peso) || peso <= 0) {
        alert("Por favor, insira um peso válido.");
        return solicitarPeso(); // Solicita novamente se o peso for inválido
    }
    return peso;
};

// Função para solicitar a altura ao usuário
const solicitarAltura = () => {
    const altura = parseFloat(prompt("Digite sua altura (em metros):"));
    if (isNaN(altura) || altura <= 0) {
        alert("Por favor, insira uma altura válida.");
        return solicitarAltura(); // Solicita novamente se a altura for inválida
    }
    return altura;
};

// Função para calcular o IMC
const calcularIMC = (peso, altura) => peso / (altura * altura);

// Função para classificar o IMC
const classificarIMC = (imc) => {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
};

// Função para exibir o resultado do IMC e a classificação
const exibirResultado = (imc, classificacao) => {
    alert(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
};

// Função principal para calcular e exibir o IMC
const calcularEClassificarIMC = () => {
    const peso = solicitarPeso();
    const altura = solicitarAltura();
    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);
    exibirResultado(imc, classificacao);
};

// Inicia o cálculo e classificação do IMC
calcularEClassificarIMC();
