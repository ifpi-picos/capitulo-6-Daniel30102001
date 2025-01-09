//questao 1 completa

// 1. Entrada e Saída de Dados
alert("Este é um alerta!");
const resposta = confirm("Você quer continuar?");
const nome = prompt("Qual é o seu nome?", "Visitante");
console.log("Nome do usuário:", nome);

// 2. Manipulação de Strings
const texto = "JavaScript é incrível!";
console.log("Tamanho da string:", texto.length);
console.log("Caractere na posição 3:", texto.charAt(3));
console.log("Texto contém 'incrível'?", texto.includes("incrível"));
console.log("Texto em maiúsculas:", texto.toUpperCase());
console.log("Texto substituído:", texto.replace("incrível", "fantástico"));

// 3. Manipulação de Arrays
const numeros = [10, 20, 30, 40];
numeros.push(50); // Adiciona no final
numeros.pop();    // Remove o último
console.log("Array modificado:", numeros);
console.log("Número maior que 15:", numeros.find(n => n > 15));
const quadrados = numeros.map(n => n ** 2);
console.log("Quadrados dos números:", quadrados);

// 4. Manipulação de Números
const valor = -123.456;
console.log("Valor absoluto:", Math.abs(valor));
console.log("Arredondado para cima:", Math.ceil(valor));
console.log("Número aleatório (0-100):", Math.floor(Math.random() * 100));

// 5. Manipulação de Datas
const agora = new Date();
console.log("Data atual:", agora.toISOString());
console.log("Ano:", agora.getFullYear());
console.log("Mês (0-11):", agora.getMonth());
console.log("Dia da semana (0-6):", agora.getDay());

// 6. Funções Globais
const numeroString = "42";
console.log("Convertido para inteiro:", parseInt(numeroString));
console.log("Convertido para float:", parseFloat("42.42"));
const uri = "https://example.com/?q=JavaScript";
console.log("URI codificada:", encodeURI(uri));

// 7. Manipulação de Objetos
const objeto = { a: 1, b: 2, c: 3 };
console.log("Chaves do objeto:", Object.keys(objeto));
console.log("Valores do objeto:", Object.values(objeto));
console.log("Pares chave-valor:", Object.entries(objeto));

const copiaObjeto = Object.assign({}, objeto, { d: 4 });
console.log("Cópia do objeto com nova propriedade:", copiaObjeto);
