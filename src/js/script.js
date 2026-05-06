let div = document.getElementById("app");
console.log(div);

let paises = document.getElementsByClassName("paises");
console.log(paises[2]);

let h1 = document.getElementById("titulo");

h1.innerText = "Olá, usuário!";
console.log(h1.innerText);

let nome = prompt("Digite seu nome: ");

let inserirHTML = document.getElementById("container");

inserirHTML.innerHTML = `
<h1>Olá, ${nome}!</h1>
<p>Esse conteúdo foi inserido dinamicamente</p>`;

let subtitulo = document.createElement("div");

subtitulo.innerHTML = "<h2>Subtítulo inserido de forma dinâmica</h2>";

document.body.append(subtitulo);

let pessoas = ["Homer", "Lisa", "Bart", "margie", "Meggie"];
let pai = document.getElementById("pessoas")

for (let pessoa of pessoas) {
    let li = document.createElement("li");
    li.innerHTML = pessoa;
    pai.append(li);
}