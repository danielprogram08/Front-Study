function login() {
    let tentativas = 4;
    let nomeUser = "admin";
    let senhaUser = "12345";
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    if (nome != nomeUser && senha != senhaUser) {
        alert("Usuário e senha inválidos! Tente novamente!");
        tentativas--;

    } else if (tentativas == 0) {
        alert("Usuário bloqueado!");
    } else {
        document.writeln("<h3>Bem-Vindo!</h3>");
    }
}