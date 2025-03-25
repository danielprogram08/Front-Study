let tentativas = 4;
let nomeUser = "admin";
let senhaUser = "12345";
let form = document.getElementById("loginForm");

function login() {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); //Impede o carregamento da página;

        let nome = document.getElementById("nome").value;
        let senha = document.getElementById("senha").value;

        if (tentativas > 0 && nome == nomeUser && senha == senhaUser) {
            document.writeln("<h3>Bem-Vindo!</h3>");
        } else {
            alert("Usuário e senha inválidos. Tente novamente");
            tentativas--;
            console.log(tentativas);
        }

        if (tentativas == 0) {
            alert("Tentativas expiradas. Usuário Bloqueado!");
        }
    });
}

login();