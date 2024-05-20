import { conectaApi } from "./conectaApi.js";

var produto = document.querySelector(".container__vitrine");

produto.addEventListener("click", function(event) {
    var elementoClicado = event.target;
    if(elementoClicado.classList.contains("btn-excluir")){
        var elementoPai = elementoClicado.parentNode;
        elementoPai.remove();
    }
})