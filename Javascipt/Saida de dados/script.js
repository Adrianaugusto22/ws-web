let nome = "Adrian";
let idade = 17;
let aprovado = true;
let altura;
let notaFinal = null;


let mensagem = `Meu nome é ${nome}, tenho ${idade} anos.

Fui Aprovado? ${aprovado ? "Sim" : "Não"}.

Minha altura é ${altura || "Não informado"}.

Minha nota Final ${notaFinal ?? "Ainda não foi Registrada" }`

console.log(mensagem);

/* saida com aspas duplas */
console.log("Olá 'Mundo'!");

/* saida com aspas simples */
console.log('Olá "Mundo"!');

/* Saida com concentação */
console.log('Olá Meus nome é:' , nome, 'E minha idade é:', idade );

console.log('Olá Meus nome é:\n' , nome, 'E minha idade é:', idade );

