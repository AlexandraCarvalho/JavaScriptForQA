
//Array são coleções de dados, podendo ser simples, até funções
var avengers = ['Thor', 'Homem de Ferro', 'Hulk'];

console.log(avengers);

avengers.push('Viúva Negra');

console.log(avengers);

avengers.push('Homem Aranha');
//avengers.pop(); //remove o ultimo registro do array
//avengers.shift(); //remove o primeiro registro do array

var indice = avengers.indexOf('Homem Aranha');
//console.log(indice);
avengers.splice(indice);

avengers.push('Gavião Arqueiro');
avengers.push('Capitão America');

console.log(avengers);

var newAvengers = ['Capitã Marvel', 'Pantera Negra', 'Doutor Estranho', 'Homem Aranha'];

//concatenando arrays

var result = avengers.concat(newAvengers);
console.log(result)
