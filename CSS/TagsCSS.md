# **Estilo CSS do projeto Netflix para estudo e análise:**

```css

/* Zerar margens e preenchimentos padrão e usar a caixa de modelagem de borda */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

/* Configurações para o corpo da página */
body {
    background-image: url('Netflix-background.png'); /* Adiciona a imagem de fundo ao corpo da página */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh; /* Faz com que o corpo ocupe toda a altura da viewport */
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
}

/* Estilo da caixa principal */
.box {
    background-color: rgba(0, 0, 0, 0.8); /* Adiciona um fundo transparente à caixa */
    width: 80%; /* Largura da caixa */
    max-width: 480px; /* Limita a largura máxima */
    border-radius: 20px; /* Borda arredondada */
    padding: 20px; /* Espaçamento interno */
    text-align: center; /* Centraliza o texto */
    color: rgb(231, 36, 36); /* Cor do texto */
}

/* Estilo da imagem dentro da caixa */
img {
    width: 100%; /* Faz a imagem ocupar 100% da largura do contêiner pai */
    height: auto; /* Mantém a proporção da imagem */
    border-radius: 10px; /* Adiciona bordas arredondadas à imagem */
}

/* Estilos para os títulos h1 e h2 */
h1, h2 {
    margin: 5px 0; /* Margem superior e inferior */
}

h2 {
    margin: 20px 0; /* Adiciona mais margem abaixo */
    font-style: italic; /* Estilo itálico */
}

/* Estilo do botão 'Entrar' */
.Entrar {
    background-color: black; /* Cor de fundo */
}

/* Estilos para campos de entrada de texto */
input {
    border-radius: 10px; /* Borda arredondada */
    padding: 10px; /* Espaçamento interno */
    margin: 10px 0; /* Margem superior e inferior */
    width: 100%; /* Ocupa toda a largura disponível */
    box-sizing: border-box; /* Inclui bordas e preenchimentos na largura total */
}

/* Estilos para o botão genérico */
button {
    background-color: gray; /* Cor de fundo */
    width: 100%; /* Ocupa toda a largura disponível */
    border-radius: 10px; /* Borda arredondada */
    font-weight: bold; /* Texto em negrito */
    margin-top: 10px; /* Margem superior */
    padding: 10px; /* Espaçamento interno */
}

/* Estilos para links */
a {
    display: block; /* Torna o link um bloco para ocupar a largura total disponível */
    text-align: center; /* Centraliza o texto */
    color: red; /* Cor do texto */
    margin-top: 10px; /* Margem superior */
    padding: 10px; /* Espaçamento interno */
}