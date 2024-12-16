function escopoDeBloco() {
    if (true) {
        let variavelLet = "Eu sou uma variável declarada com let dentro do bloco";
        var variavelVar = "Eu sou uma variável declarada com var dentro do bloco";
        
        console.log("Dentro do bloco:");
        console.log(variavelLet); // Acessível dentro do bloco
        console.log(variavelVar); // Acessível dentro do bloco
    }

    console.log("\nFora do bloco:");
    // console.log(variavelLet); // Isso causará um erro porque let tem escopo de bloco
    console.log(variavelVar); // Ainda acessível porque var ignora o escopo de bloco
}

escopoDeBloco();

