//questao 2 completa

// 1. Funções Globais Avançadas
const jsonString = '{"nome": "Maria", "idade": 30}';
const jsonObject = JSON.parse(jsonString); // Converte JSON string para objeto
console.log("Objeto a partir de JSON:", jsonObject);

const jsonStringified = JSON.stringify(jsonObject); // Converte objeto para JSON string
console.log("JSON string a partir do objeto:", jsonStringified);

// 2. Manipulação de Arrays Avançada
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log("Soma dos números do array:", soma);

const duplicados = numeros.flatMap(n => [n, n]); // Duplica cada valor no array
console.log("Array com valores duplicados:", duplicados);

// 3. Manipulação de Números
const grandeNumero = 1234567.89;
console.log("Número formatado:", grandeNumero.toLocaleString("en-US", { style: "currency", currency: "USD" }));

console.log("É um número seguro?", Number.isSafeInteger(9007199254740991)); // Verifica se o número é seguro no JS

// 4. Manipulação de Strings Avançada
const texto = "  JavaScript é incrível!  ";
console.log("Texto sem espaços:", texto.trimStart().trimEnd());

const frase = "Aprender JavaScript é divertido";
const partes = frase.split(" ");
console.log("Frase dividida em palavras:", partes);
console.log("Palavras unidas novamente:", partes.join("-"));

// 5. Manipulação de Objetos Avançada
const usuario = { nome: "Carlos", idade: 25 };
const usuarioCongelado = Object.freeze(usuario); // Impede alterações
console.log("Tentativa de alterar propriedade (não permitido):");
usuarioCongelado.idade = 30;
console.log(usuarioCongelado);

const prototipo = { saudacao: "Olá" };
const novoObjeto = Object.create(prototipo); // Cria um objeto com um protótipo
console.log("Acessando propriedade do protótipo:", novoObjeto.saudacao);

// 6. Funções do Math Avançadas
console.log("Logaritmo de 100:", Math.log10(100));
console.log("Valor de PI:", Math.PI);
console.log("Exponencial de 2:", Math.exp(2));
console.log("Hipotenusa entre 3 e 4:", Math.hypot(3, 4));

// 7. Manipulação de Datas Avançada
const hoje = new Date();
const dataPersonalizada = new Date(2023, 0, 1, 10, 30, 0); // Ano, Mês(0-11), Dia, Hora, Minuto, Segundo
console.log("Data personalizada:", dataPersonalizada);

const umaSemanaDepois = new Date(hoje);
umaSemanaDepois.setDate(hoje.getDate() + 7); // Adiciona 7 dias
console.log("Data após uma semana:", umaSemanaDepois);

// 8. Manipulação de Map e Set
const mapa = new Map();
mapa.set("nome", "Ana");
mapa.set("idade", 22);
console.log("Valor da chave 'nome':", mapa.get("nome"));
console.log("Todas as chaves do mapa:", Array.from(mapa.keys()));

const conjunto = new Set([1, 2, 3, 4, 4, 5]); // Remove duplicatas
conjunto.add(6);
conjunto.delete(3);
console.log("Conjunto sem duplicatas:", conjunto);

// 9. Manipulação de Promises
const promiseExemplo = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Dados carregados com sucesso!"), 1000);
});
promiseExemplo.then(console.log).catch(console.error);

// 10. Manipulação de Symbol
const simbolo = Symbol("identificador");
const objetoSimbolo = { [simbolo]: "valor secreto" };
console.log("Acessando valor usando símbolo:", objetoSimbolo[simbolo]);

// 11. Iteradores e Generators
function* gerador() {
  yield "Primeiro";
  yield "Segundo";
  yield "Terceiro";
}
const iterador = gerador();
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
