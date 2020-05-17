//Document Object Model(DOM): representa as marcações do HTML

/* ***DOM - estrutura**
html => Pagina

****elementos do DOM*****
h1 = Cabecalhos/Titulos
p = Paragrafo
ul = Agrupadores de Listas
li = os itens de lista do elemento ul
a = link
form = formularios
input do tipo texto = campo de texto
input do tipo check = checkbox
input do tipo radio = botões de radio
textArea = paragrafos
button = botão
span = elementos genericos
*/


function somaValores(){
    var n1 = document.getElementById("numberOne").value;
    var n2 = document.getElementById("numberTwo").value;

    var result = parseInt(n1) + parseInt(n2);

    var divResultado = document.getElementById("resultado");

    divResultado.append("O resultado da soma é: " + result);
    console.log(result);
}
