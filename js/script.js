function sortear() {
    // Obter o número digitado pelo usuário
    var numeroEscolhido = parseInt(document.getElementById("numero").value);

    // Gerar um número aleatório entre 1 e 100
    var numeroSorteado = Math.floor(Math.random() * 100) + 1;

    // Verificar se o número sorteado é igual ao número escolhido pelo usuário
    if (numeroSorteado === numeroEscolhido) {
        alert("Parabéns, você ganhou!");
    } else {
        alert("Mais sorte na próxima, otário.");
    }
}
