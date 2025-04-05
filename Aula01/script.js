function conversorWons() {
  valorWons = prompt("Digite um valor em wons");
  totalWons = 0.004 * valorWons;
  alert(
    `O valor em real do wons digitado é ${totalWons.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}.`
  );
}

function conversorDolar() {
  valorDolar = prompt("Digite um valor em dolar");
  totalDolar = 5.84 * valorDolar;
  alert(
    `O valor em real do dolar digitado é ${totalDolar.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}.`
  );
}

function conversorEuro() {
  valorEuro = prompt("Digite um valor em euro");
  totalEuro = 6.4 * valorEuro;
  alert(
    `O valor em real do euro digitado é ${totalEuro.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`
  );
}
