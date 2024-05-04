import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, imagem) {
    const produtos = document.createElement("li");
    produtos.className = "card";
    produtos.innerHTML = `<img decoding="async" src="${imagem}" alt="${nome}">
    <h2>${nome}</h2>
    <p>R$${preco}</p>
    <button>Comprar</button>`

    return produtos;
}

async function listaProdutos() {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem)))
}

listaProdutos();