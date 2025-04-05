function jogar() {
  let ganhou = true; // Inicialmente assume que o jogador ganhou
  for (let rodada = 1; rodada <= 3; rodada++) {
    console.log("Rodada: " + rodada);
    let escolhaJogador;
    let validacao = false;

    while (!validacao) {
      escolhaJogador = prompt("Nível " + rodada + ", vidro (1, 2 ou 3)?");

      // Verifica se a entrada é um número e está entre 1 e 3
      if (
        !isNaN(escolhaJogador) && parseInt(escolhaJogador) >= 1 && parseInt(escolhaJogador) <= 3
      ) {
        validacao = true;
        escolhaJogador = parseInt(escolhaJogador); // Converte para número inteiro
      } else {
        alert("Opção inválida. Por favor, escolha entre 1, 2 ou 3.");
      }
    }

    const pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador === pisoQuebrado) {
      // Escolheu o vidro que estava quebrado
      alert("Vidro quebrou! Acabou o jogo pra você.");
      rodada = 5; // Força a saída do loop
      ganhou = false;
    } else {
      alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado);
    }
  }

  if (ganhou) {
    // Se 'ganhou' for true
    alert("Você venceu! Parabéns!");
  } else {
    // Se 'ganhou' for false
    alert("Você perdeu!");
  }
}