function conversor() {
    valorWons = prompt("Digite um valor em wons")
    totalWons = 0.004 * valorWons
    alert(`O valor em real do wons digitado é ${totalWons.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}.`)
}