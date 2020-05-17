
//Declarando a função (sem parametro)
function welcome(){
    var welcome = "Hello JavaScript - Automação QA Ninja";
    document.getElementById("welcome").append(welcome);
       console.log(welcome);
}

//Invocando/chamando a função
welcome();

//Declarando função com parametro e retorno
function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(15, 25));
