//questao 7 completa

// Variável global
var mensagemGlobal = "Sou uma variável global";

function verificarEscopo() {
    // Variável local
    var mensagemLocal = "Sou uma variável local";

    console.log("Dentro da função:");
    console.log(mensagemGlobal); // Pode acessar a variável global
    console.log(mensagemLocal);  // Pode acessar a variável local
}

// Chamando a função
verificarEscopo();

console.log("\nFora da função:");
console.log(mensagemGlobal); // A variável global pode ser acessada fora da função

// Tentando acessar a variável local fora da função
try {
    console.log(mensagemLocal); // Isso causará um erro
} catch (erro) {
    console.log("Erro ao acessar mensagemLocal fora da função:", erro.message);
}
