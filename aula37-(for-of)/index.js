//For of
const nome = 'João';
// // For clássico
for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
console.log(' ');

// // For in
for (let i in nome){
    console.log(nome[i]); 
}
console.log(' ');
//For of
for (let valor of nome){
    console.log(valor);
}
console.log('#################');
const frutas = ['Pera', 'Maçã', 'Uva'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
console.log(' ');

for (let i in frutas) {
    console.log(frutas[i]);
}
console.log(' ');
for (let valor of frutas) {
    console.log(valor);
}
console.log('#################');

frutas.forEach(function(valor, indice){
    console.log(valor, indice);
});