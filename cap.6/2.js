const pessoa = { nome: "João", idade: 30 };
Object.freeze(pessoa);
pessoa.idade = 31;  // Não vai funcionar, o objeto está congelado
console.log(pessoa.idade);  // 30


