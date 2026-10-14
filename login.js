const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value;

    const usuarios = JSON.parse(
        localStorage.getItem("usuariosRumo") || "[]"
    );

    const usuario = usuarios.find(function (item) {
        return item.email.toLowerCase() === email &&
               item.senha === senha;
    });

    if (!usuario) {
        alert("E-mail ou senha incorretos.");
        return;
    }

    localStorage.setItem("usuarioLogado", "true");

    localStorage.setItem(
        "usuarioAtivoRumo",
        JSON.stringify({
            nome: usuario.nome,
            email: usuario.email
        })
    );

    alert("Bem-vindo, " + usuario.nome + "!");

    window.location.href = "index.html";
});

const botaoMostrarSenha = document.getElementById("mostrarSenha");
const campoSenha = document.getElementById("senha");

if (botaoMostrarSenha && campoSenha) {
    botaoMostrarSenha.addEventListener("click", function () {
        const mostrar = campoSenha.type === "password";
        campoSenha.type = mostrar ? "text" : "password";

        const icone = botaoMostrarSenha.querySelector("i");

        if (icone) {
            icone.classList.toggle("fa-eye", !mostrar);
            icone.classList.toggle("fa-eye-slash", mostrar);
        }
    });
}
