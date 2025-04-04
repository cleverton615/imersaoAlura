function jogar() {
    ganhou = 0 //Se for 1, perdeu. Se for 0, ganhou.
    for (rodada = 1; rodada <= 3; rodada++) {
    console.log("Rodada: " + rodada);
    escolhaJogador = prompt("Nível " + rodada + ", vidro (1, 2 ou 3)?");
    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == pisoQuebrado) {
      // Escolheu o vidro que estava quebrado
      alert("Vidro quebrou! Acabou o jogo pra você.");
      rodada = 5;
      ganhou = 1
    } else {
      alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado);
    }
  }

  if (ganhou == 0) {
    alert("Você venceu! Parabéns!");
  }

}
