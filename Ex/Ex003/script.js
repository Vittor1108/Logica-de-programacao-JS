var j1 = Number(prompt("Jogador 1, Digite um número:"));
var j2 = Number(prompt("Jogador 2, Digite outro número:"));
var sorteado = parseInt(Math.random() * 2);
if(j1 == j2){
    alert("EMPATE! Os dois jogadores digitaram númeors iguais!");
}
else if(sorteado == 1 && j1 > j2){
    alert(`O número sorteado foi ${sorteado}`);
    alert(`O jogador 1 escolheu o número ${j1} e o jogador 2 escolheu o número ${j2}`);
    alert(`O jogador 1 ganhou por ter escolhido o número maior!`);
}
else if(sorteado == 0 && j1 < j2){
    alert(`O número sorteado foi ${sorteado}`);
    alert(`O jogador 1 escolheu o número ${j1} e o jogador 2 escolheu o número ${j2}`);
    alert(`O jogador 1 ganhou por ter escolhido o número menor!`);
}
else if(sorteado == 1 && j2 > j1){
    alert(`O número sortado foi ${sorteado}`);
    alert(`O jogador 1 escolheu o número ${j1} e o jogador 2 escolheu o número ${j2}`);
    alert(`O jogaodr 2 ganhou por ter escolhido o número maior!`);
}
else{
    alert(`O número sorteado foi ${sorteado}`);
    alert(`O jogador 1 escolheu o número ${j1} e o jogador 2 escolheu o número ${j2}`);
    alert(`O jogador 2 ganhou por ter escolhido o número menor!`);
}
