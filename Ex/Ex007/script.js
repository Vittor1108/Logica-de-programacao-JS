var ano = 1004
while(ano <=2050){
    if((ano % 100 > 0)  || (ano % 400 === 0)){
        document.write(ano + '<br>');
    }else{
        document.write(`Ano ${ano} não é bissexto <br>`);
    }
    ano +=4;
}
