var random = new Array(12, 30, 45, 28, 0, 12, 78, 64);
var soma = 0
var output = document.querySelector('.output');
var array = document.querySelector('.array');
for(var i = 0; i < random.length; i++){

    if(!isNaN(random[i]) && random[i] % 2 === 0){
        soma += random[i];
    }
}

output.innerHTML = `A soma dos números pares do Array é ${soma}`
array.innerHTML = `Os números do Array é ${random}`;
