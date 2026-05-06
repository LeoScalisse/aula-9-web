let produtos = document.getElementsByClassName("produto");
let resultado = [];

for (const produto of produtos) {
    resultado.push(produto.innerText)
}

console.log(resultado);