function cancelar() {
  document.getElementById("cancela");
  location.href = "votacao.html";
}

function confirma() {
  document.getElementById("confirma");
  location.href = "FIM.html";
}

function verificarAutenticacao() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    window.location.href = "login.html";
  }
}

verificarAutenticacao();
