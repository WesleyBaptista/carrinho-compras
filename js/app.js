let totalCompra = 0;
document.getElementById("lista-produtos").innerHTML = " ";
document.getElementById("valor-total").textContent = "R$ 0";

function adicionar() {
    let quantidade = document.getElementById("quantidade").value;
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let subtotal = quantidade * valorUnitario;
    let listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
  </section>`;

    totalCompra = totalCompra + subtotal;
    let ValorTotal = document.getElementById("valor-total");
    ValorTotal.textContent = `R$ ${totalCompra}`;

    document.getElementById("quantidade").value = 0; 
}

function limpar(){
    document.getElementById("lista-produtos").innerHTML = " ";
    document.getElementById("valor-total").textContent = "R$ 0";
    document.getElementById("quantidade").value = 0;
}