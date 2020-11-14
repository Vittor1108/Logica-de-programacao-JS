var dias = new Array('Domingo', 'Segunda', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado');
var data = new Date ();
var hoje = data.getDay();

switch(hoje){
    case 0:
        alert(`Bem vindo!! Hoje é Domingo!`);
        break
    case 1:
        alert(`Bem vindo!! Hoje é Segunda-Feira!!`);
        break
    case 2:
        alert(`Bem vindo!! Hoje é Terça-Feira!!`);
        break
    case 3:
        alert(`Bem vindo!! Hoje é Quarta-Feira!!`);
        break
    case 4:
        alert(`Bem vindo!! Hoje é Quinta-Feira!!`);
        break
    case 5:
        alert(`Bem vindo!! Hoje é Sexta-Feira!! SEXTOOOUUUUUUU!`);
        break
    case 6:
        alert(`Bem vindo!! Hoje é Sábado!! SABADOOUUUUUU!!!`);
        break
}