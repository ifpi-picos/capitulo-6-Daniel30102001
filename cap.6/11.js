// Função para gerar um número aleatório entre 1 e 100
const gerarNumeroSecreto = () => Math.floor(Math.random() * 100) + 1;

// Função para solicitar o palpite do usuário
const solicitarPalpite = () => {
    const palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        return solicitarPalpite(); // Solicita novamente caso o palpite seja inválido
    }
    return palpite;
};

// Função para verificar o palpite do usuário
const verificarPalpite = (palpite, numeroSecreto) => {
    if (palpite === numeroSecreto) {
        return "correto";
    } else if (palpite < numeroSecreto) {
        return "menor";
    } else {
        return "maior";
    }
};

// Função principal do jogo
const jogarAdivinhacao = () => {
    const numeroSecreto = gerarNumeroSecreto();
    let tentativas = 10;

    alert("Bem-vindo ao jogo de adivinhação! Você tem 10 tentativas para adivinhar o número secreto entre 1 e 100.");

    while (tentativas > 0) {
        const palpite = solicitarPalpite();
        const resultado = verificarPalpite(palpite, numeroSecreto);

        if (resultado === "correto") {
            alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${11 - tentativas} tentativas!`);
            break;
        } else {
            tentativas--;
            alert(`Seu palpite foi ${resultado}. Você ainda tem ${tentativas} tentativas.`);
        }
    }

    if (tentativas === 0) {
        alert(`Você não acertou o número secreto. O número era ${numeroSecreto}.`);
    }
};

// Inicia o jogo
jogarAdivinhacao();
