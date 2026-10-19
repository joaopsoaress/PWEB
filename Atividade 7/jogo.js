function jogar(jogador) {
  var opcoes = ["pedra", "papel", "tesoura"];
  var cpu = opcoes[Math.floor(Math.random() * 3)];

  var resultado;
  
  if (jogador === cpu) {
    resultado = "Empate!";
  } else if (
    (jogador === "pedra" && cpu === "tesoura") ||
    (jogador === "papel" && cpu === "pedra") ||
    (jogador === "tesoura" && cpu === "papel")
  ) {
    resultado = "Você ganhou :)";
  } else {
    resultado = "Você perdeu :(";
  }

  alert("Você: "+ jogador +"\nCPU: "+ cpu +"\n"+ resultado);
}

document.getElementById("btnPedra").addEventListener("click", function () {
  jogar("pedra");
});

document.getElementById("btnPapel").addEventListener("click", function () {
  jogar("papel");
});

document.getElementById("btnTesoura").addEventListener("click", function () {
  jogar("tesoura");
});