//Loops (laços de repetição)


//For é movido por declaração
for (var a = 0; a < 10; a++){
        console.log(`Repetindo porque ${a} é menor do que 10.`);
        //pra poder interpolar a string, teve que usar aspostrofos ``.
}

//While é movido por condição
var i = 0;

while (i <= 10){
        console.log(`Repetindo porque ${i} é menor ou igual a  10.`);
        i++;
}


//foreach, é um for dentro de um array
var avengers = ['Viúva Negra', 'Capitã Marvel', 'Feiticeira Escarlate', 'Doutor Estranho', 'Pantera Negra', 'Homem de Ferro'];

avengers.forEach(function(value, key){  
        console.log(`${value} na posição ${key}`)
});