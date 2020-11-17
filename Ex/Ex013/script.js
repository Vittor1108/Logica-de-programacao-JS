var dados = [{"nome": "Vittor", "email": "vittordaniel1108@gmail.com"},
        {"nome": "Davi", "email": "davi1111@gmail.com"},
        {"nome": "Manuel", "email": "manuel@gmail.com"}
];

var msg = ''

for(var i = 0; i < dados.length; i++){
msg += `<h2>Nome: ${dados[i].nome}</h2>`
msg += `<p>Email: ${dados[i].email}</p>`
}

document.querySelector('#output').innerHTML = msg;