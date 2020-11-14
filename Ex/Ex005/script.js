var n = Number(prompt("Digite um número:"));
var indice = 0;
while(indice <= 100){
    document.write(`${n} x ${indice} = ${n * indice}<br>`);
    indice = indice + 1;
    if(indice % 10 == 1 && indice >  0){
        document.write('<hr>');
    }

    
}
