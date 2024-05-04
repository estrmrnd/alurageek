async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaProduto(nome, imagem, preco) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            imagem: imagem,
            preco: preco,
        })
    });
    
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}
export const conectaApi = {
    listaProdutos,
    criaProduto
}