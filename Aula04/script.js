function jogar() {
  let personagem = ["", "", ""];
  let viloes = ["", "", ""];
  let forcaPersonagem = 0;
  let forcaViloes = 0;
  for (let i = 0; i < 3; i++) {
    escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
    personagem[i] = escolhaPersonagem;
    //Calcular a força de cada jogador, e depois somar pra saber a força do time
    forcaPersonagem += Math.floor(Math.random() * 10) + 1;
  }
  for (let i = 0; i < 3; i++) {
    indiceAleatorio = Math.floor(Math.random() * 10);
    viloesPossiveis = [
      " Uchiha Madara",
      " Majin Boo",
      " Barba Negra",
      " Sosuke Aizen",
      " Muzan Kibutsuji",
      " All For One",
      " Meruem",
      " Yami Bakura",
      " Father",
      " Baran",
    ];
    viloes[i] = viloesPossiveis[indiceAleatorio];
    //Calcular a força de cada jogador do time do computador
    forcaViloes += Math.floor(Math.random() * 10) + 1;
  }
  alert("Vilões sorteados: " + viloes);

  //Comparar os dois times para saber quem venceu
  if (forcaPersonagem > forcaViloes) {
    alert(
      "Seu time é muito forte! Você ganhou a disputa de cabo de guerra! Sua força foi " +
        forcaPersonagem +
        ". A força dos vilões foram de " +
        forcaViloes
    );
  } else {
    if (forcaPersonagem < forcaViloes) {
      alert(
        "Seu time é fraquinho. O Computador ganhou o cabo de guerra com força de " +
          forcaViloes +
          ". A sua força foi de " +
          forcaPersonagem
      );
    } else {
      alert("Os dois times tem a mesma força! Vocês empataram!");
    }
  }
}
