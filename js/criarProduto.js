import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

 async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const preco = Math.floor(Math.random() * 10).toString();

    await conectaApi.criaProduto(nome, imagem, preco);

    
}

formulario.addEventListener("submit", evento => criarProduto(evento));