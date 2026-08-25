//For classico - Geralmente é usado com iteráveis (arrays, strings )
//For in - Retorna o índice ou chave (string) - Geralmente é usado com objetos
//For of - Retorna o valor em si (array, string) - Geralmente é usado com iteráveis (arrays, strings)

const frutas = ['Pera', 'Maçã', 'Uva']; 
//for (let i = 0; i< frutas.length; i++){
//    console.log(frutas[i]);
//}
for (let i in frutas){ //for in é usado para percorrer os índices do array
    console.log(frutas[i]); //i é o índice do array 
}
const pessoa = {
    nome: 'Mateus',
    sobrenome: 'Canjerana',
    idade: 25
};
for (let key in pessoa){ 
    console.log(pessoa.nome);
    console.log(key, pessoa[key]); //key é a chave do objeto e pessoa[key] é o valor da chave
}