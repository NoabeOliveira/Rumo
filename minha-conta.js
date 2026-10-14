const usuarioEstaLogado =
    localStorage.getItem("usuarioLogado");

const dadosUsuario =
    localStorage.getItem("usuarioAtivoRumo");

if (usuarioEstaLogado !== "true" || !dadosUsuario) {
    window.location.replace("acesso.html");
} else {

    let usuarioAtivo = JSON.parse(dadosUsuario);

    const contaNome = document.getElementById("contaNome");
    const contaEmail = document.getElementById("contaEmail");
    const btnEditarConta = document.getElementById("btnEditarConta");

    let modoEdicao = false;

    contaNome.value = usuarioAtivo.nome;
    contaEmail.value = usuarioAtivo.email;

    btnEditarConta.addEventListener("click", function () {

        if (!modoEdicao) {

            contaNome.removeAttribute("readonly");
            contaEmail.removeAttribute("readonly");

            contaNome.focus();

            btnEditarConta.innerHTML = `
                <i class="fa-regular fa-floppy-disk"></i>
                Salvar alterações
            `;

            modoEdicao = true;
            return;
        }
        const novoNome = contaNome.value.trim();
        const novoEmail = contaEmail.value.trim().toLowerCase();

        if (!novoNome || !novoEmail) {
            alert("Preencha todos os campos.");
            return;
        }
           const usuarios = JSON.parse(
            localStorage.getItem("usuariosRumo") || "[]"
        );

        
        const indiceUsuario = usuarios.findIndex(function (usuario) {
            return usuario.email.toLowerCase() ===
                usuarioAtivo.email.toLowerCase();
        });

        if (indiceUsuario === -1) {
            alert("Usuário não encontrado.");
            return;
        }

        const emailExistente = usuarios.some(function (usuario, indice) {
            return indice !== indiceUsuario &&
                usuario.email.toLowerCase() === novoEmail;
        });

        if (emailExistente) {
            alert("Este e-mail já pertence a outra conta.");
            return;
        }

        usuarios[indiceUsuario].nome = novoNome;
        usuarios[indiceUsuario].email = novoEmail;

        localStorage.setItem(
            "usuariosRumo",
            JSON.stringify(usuarios)
        );

        usuarioAtivo = {
            nome: novoNome,
            email: novoEmail
        };

        localStorage.setItem(
            "usuarioAtivoRumo",
            JSON.stringify(usuarioAtivo)
        );

        contaNome.setAttribute("readonly", true);
        contaEmail.setAttribute("readonly", true);

        btnEditarConta.innerHTML = `
            <i class="fa-regular fa-pen-to-square"></i>
            Editar dados
        `;

        modoEdicao = false;

        alert("Dados atualizados com sucesso!");
    });
}
