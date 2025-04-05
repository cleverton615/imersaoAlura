function jogar() {
  let validacaoIdade = false;
  if (!validacaoIdade) {
    idade = prompt("Quantos anos você tem?");
    if (!isNaN(idade) && parseInt(idade) >= 18) {
      validacaoIdade = true;
      idade = parseInt(idade);
    } else {
      alert("Você não tem idade para jogar este jogo!");
    }
  }

  let validacao = false;
  if (idade >= 18) {
    while (!validacao) {
      escolhaJogador = prompt("Digite: 1-Pedra, 2-papel ou 3-tesoura?");
      // Verifica se a entrada é um número e está entre 1 e 3
      if (
        !isNaN(escolhaJogador) &&
        parseInt(escolhaJogador) >= 1 &&
        parseInt(escolhaJogador) <= 3
      ) {
        validacao = true;
        escolhaJogador = parseInt(escolhaJogador); // Converte para número inteiro
      } else {
        alert("Opção inválida. Por favor, escolha entre 1, 2 ou 3.");
      }
    }
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
