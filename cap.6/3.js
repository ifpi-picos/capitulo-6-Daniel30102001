// Função para calcular a média de três números usando funções predefinidas

// Função que calcula a média
function calcularMedia(n1, n2, n3) {
    // Usando Math.max() para garantir que os números são positivos antes de calcular a média
    const maiorValor = Math.max(n1, n2, n3);
    console.log("O maior valor é: " + maiorValor);
    
    // Usando Array.prototype.reduce() para somar os números
    const soma = [n1, n2, n3].reduce((total, valor) => total + valor, 0);
    
    // Calculando a média
    const media = soma / 3;
    
    // Exibindo o resultado usando console.log
    console.log("A média dos três números é: " + media.toFixed(2));
}

// Chamada da função com três números
calcularMedia(5, 8, 10);
