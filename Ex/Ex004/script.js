var nota1 = Number(prompt("Digite sua primeira nota:"));
var nota2 = Number(prompt("Digite sua segunda nota:"));
var media = (nota1 + nota2)/ 2;

if(nota1 === 0 || nota2 === 0 || media < 5){
    alert(`Sua primeira nota foi ${nota1}, sua segunda nota foi ${nota2} e sua média final foi ${media}!`);
    alert(`Você foi reprovado por não atender as expectativas!`);
}
else{
    alert(`Sua primeira nota foi ${nota1}, sua segunda nota foi ${nota2} e sua média final foi ${media}!`);
    alert(`Parabéns!!! Você foi aprovado!!`);
}