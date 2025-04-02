function jogar() {
  idade = prompt("Quantos anos você tem?");
  if (idade < 18) {
    alert("Você NÃO pode jogar jokenpo");
  }

  if (idade >= 18) {
    escolhaJogador = prompt("Digite: 1-Pedra, 2-papel ou 3-tesoura?");
    escolhaComputador = Math.floor(Math.random() * 3) + 1; //Comando para gerar um número aleátorio entre 1 e 3
    alert("Escolha do computador: " + escolhaComputador);
    if (escolhaJogador == escolhaComputador) {
      //Em caso de empate
      alert("Empate!");
    }
    if (escolhaJogador == 1 && escolhaComputador == 2) {
      alert("Computador venceu!");
    }
    if (escolhaJogador == 1 && escolhaComputador == 3) {
      alert("Jogador venceu!");
    }
    if (escolhaJogador == 2 && escolhaComputador == 1) {
      alert("Jogador venceu!");
    }
    if (escolhaJogador == 2 && escolhaComputador == 3) {
      alert("Computador venceu!");
    }
    if (escolhaJogador == 3 && escolhaComputador == 1) {
      alert("Computador venceu!");
    }
    if (escolhaJogador == 3 && escolhaComputador == 2) {
      alert("Jogador venceu!");
    }
  }
}