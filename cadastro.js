
const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais.");
        return;
    }
    const usuarios = JSON.parse(
        localStorage.getItem("usuariosRumo") || "[]"
    );
    const emailExiste = usuarios.some(function (usuario) {
        return usuario.email.toLowerCase() === email;
    });

    if (emailExiste) {
        alert("Este e-mail já está cadastrado.");
        return;
    }

    usuarios.push({
        nome: nome,
        email: email,
        senha: senha
    });

    localStorage.setItem(
        "usuariosRumo",
        JSON.stringify(usuarios)
    );

    alert("Conta criada com sucesso!");
    window.location.href = "login.html";
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
