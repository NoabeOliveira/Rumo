
const usuarioAtivo = JSON.parse(
    localStorage.getItem("usuarioAtivoRumo") || "null"
);

if (!usuarioAtivo || !usuarioAtivo.id) {
    window.location.replace("acesso.html");
} else {

    const chaveFavoritos = "favoritosRumo_" + usuarioAtivo.id;

    let favoritos = JSON.parse(
        localStorage.getItem(chaveFavoritos) || "[]"
    );

    const listaFavoritos =
        document.getElementById("listaFavoritos");

    const favoritosVazio =
        document.getElementById("favoritosVazio");

    function mostrarFavoritos() {

        listaFavoritos.innerHTML = "";

        if (favoritos.length === 0) {
            favoritosVazio.style.display = "block";
            return;
        }

        favoritosVazio.style.display = "none";

        favoritos.forEach(function (favorito) {

            const card = document.createElement("article");
            card.classList.add("card-favorito");

            const imagem = document.createElement("img");
            imagem.src = favorito.imagem;
            imagem.alt = favorito.nome;

            const conteudo = document.createElement("div");
            conteudo.classList.add("card-favorito-conteudo");

            const descricao = document.createElement("p");
            descricao.textContent = "DESTINO SALVO";

            const titulo = document.createElement("h2");
            titulo.textContent = favorito.nome;

            const botao = document.createElement("button");
            botao.type = "button";
            botao.classList.add("btn-remover-favorito");

            botao.innerHTML = `
                <i class="fa-solid fa-heart"></i>
                Remover dos favoritos
            `;

            botao.addEventListener("click", function () {

                favoritos = favoritos.filter(function (item) {
                    return item.nome !== favorito.nome;
                });

                localStorage.setItem(
                    chaveFavoritos,
                    JSON.stringify(favoritos)
                );

                mostrarFavoritos();
            });

            conteudo.appendChild(descricao);
            conteudo.appendChild(titulo);
            conteudo.appendChild(botao);

            card.appendChild(imagem);
            card.appendChild(conteudo);

            listaFavoritos.appendChild(card);
        });
    }

    mostrarFavoritos();
}
