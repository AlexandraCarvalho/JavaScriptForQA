/*
* variável é um local na memória do computador, onde se pode alocar valores
* valores que poderão ser alterados durante a execução do software
* por isso é chamada de variável
*/


//Declarando a função (sem parametro)
function welcome(){
        var welcome = "Hello JavaScript - Automação QA Ninja";
        document.getElementById("welcome").append(welcome);
           console.log(welcome);
}

