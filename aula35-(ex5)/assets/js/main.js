const elementos = [
    {tag: 'p', texto: 'Qualquer texto'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container =  document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++ ){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto; //Ou pode-se usar 'innerText' em vez de 'innerHTML' para evitar que o texto seja interpretado como código HTML.
    //ou pode-se criar um nó de texto e adicioná-lo à tag criada, como mostrado abaixo:
    // let textoCriado = document.createTextNode(texto);
    // tagCriada.appendChild(textoCriado);

    div.appendChild(tagCriada);
}
console.log(div)
container.appendChild(div);