var n1 = Number(prompt("Digite seu número:"));

escrever ()

function escrever(){
    var output = document.querySelector('#output');
    output.innerHTML = `${n1}`
}

function somar(){
    var n2 = Number(prompt("Digite outro número:"));
    n1 = n1 + n2;
   
    escrever();
}

function sub(){
    var n2 = Number(prompt("Digite outro número:"));
    n1 = n1 - n2;

    escrever();
}

function div(){
    var n2 = Number(prompt("Digite outro número:"));
    n1 = n1 / n2;

    escrever();
}

function mult(){
    var n2 = Number(prompt("Digite outro número:"));
    n1 = n1 * n2;

    escrever();
}

