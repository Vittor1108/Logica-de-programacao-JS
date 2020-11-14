var n1 = Number(prompt("Digite seu número:"));

escrever ()

function escrever(){
    var output = document.querySelector('#output');
    output.innerHTML = `${n1}`
}

function calcular(simbolo){
    var n2 = Number(prompt("Digite um número:"));
    
    switch(simbolo){
        case '+':
            n1 += n2;
            break;
        case '-':
            n1 -= n2;
            break
        case '/':
            n1 /= n2;
            break
        case 'x':
            n1 *= n2;
            break
    }

    escrever()
}


