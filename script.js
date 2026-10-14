
const botoesFavorito =
    document.querySelectorAll(".favorito-antigo");

let favoritos =
    JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];

botoesFavorito.forEach(function (botao) {

    const card =
        botao.closest(".card-destino");

    const destino =
        card.querySelector("h3")
            .textContent
            .trim();

    const icone =
        botao.querySelector("i");

    if (favoritos.includes(destino)) {

        botao.classList.add("favoritado");

        icone.classList.remove("fa-regular");

        icone.classList.add("fa-solid");

    }

    botao.addEventListener(
        "click",
        function () {

            if (favoritos.includes(destino)) {

                favoritos =
                    favoritos.filter(
                        function (item) {

                            return item !== destino;

                        }
                    );

                botao.classList.remove(
                    "favoritado"
                );

                icone.classList.remove(
                    "fa-solid"
                );

                icone.classList.add(
                    "fa-regular"
                );

            } else {


                favoritos.push(destino);

                botao.classList.add(
                    "favoritado"
                );

                icone.classList.remove(
                    "fa-regular"
                );

                icone.classList.add(
                    "fa-solid"
                );

            }

            localStorage.setItem(
                "favoritos",
                JSON.stringify(favoritos)
            );

            console.log(
                "Favoritos:",
                favoritos
            );

        }
    );

});

const campoDestino = document.getElementById("destino");

const campoData = document.getElementById("dataViagem");

const campoPessoas = document.getElementById("pessoas");

const botaoBuscar = document.getElementById("btnBuscar");

botaoBuscar.addEventListener("click", function () {

    const destinoDigitado =
        campoDestino.value
            .trim()
            .toLowerCase();

    if (destinoDigitado === "") {

        alert("Digite um destino para realizar a busca.");

        campoDestino.focus();

        return;

    }
const cards =
        document.querySelectorAll(".card-destino");

    let destinoEncontrado = false;

    cards.forEach(function (card) {

        const titulo =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        if (titulo.includes(destinoDigitado)) {

            card.style.display = "block";

            destinoEncontrado = true;

        } else {

            card.style.display = "none";

        }

    });

    if (destinoEncontrado) {

        document
            .getElementById("destinos")
            .scrollIntoView({
                behavior: "smooth"
            });

    } else {

        alert(
            "Destino não encontrado. Tente outro lugar."
        );

        cards.forEach(function (card) {

            card.style.display = "block";

        });

    }

});
campoDestino.addEventListener(
    "keydown",
    function (evento) {

        
        if (evento.key === "Enter") {

            botaoBuscar.click();

        }

    }
);

const botaoVerTodos =
    document.querySelector(".ver-todos");

botaoVerTodos.addEventListener(
    "click",
    function () {

        const cards =
            document.querySelectorAll(".card-destino");

        cards.forEach(function (card) {

            card.style.display = "block";

        });
        campoDestino.value = "";

        campoDestino.focus();

    }
);

const campoEmail =
    document.getElementById("emailNewsletter");

const botaoNewsletter =
    document.getElementById("btnNewsletter");
botaoNewsletter.addEventListener(
    "click",
    function () {

        const email =
            campoEmail.value.trim();

        if (email === "") {

            alert(
                "Digite seu e-mail para receber novidades."
            );

            campoEmail.focus();

            return;

        }

        if (
            !email.includes("@") ||
            !email.includes(".")
        ) {

            alert(
                "Digite um endereço de e-mail válido."
            );

            campoEmail.focus();

            return;

        }

        alert(
            "Inscrição realizada com sucesso!"
        );

        campoEmail.value = "";

    }
);

const linksMenu =
    document.querySelectorAll(".navbar a");

linksMenu.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

           
            linksMenu.forEach(
                function (item) {

                    item.classList.remove("ativo");

                }
            );

            link.classList.add("ativo");

        }
    );

});

const botaoExplorar =
    document.querySelector(".btn-explorar");

botaoExplorar.addEventListener(
    "click",
    function () {

        const cards =
            document.querySelectorAll(".card-destino");


        cards.forEach(function (card) {

            card.style.display = "block";

        });

    }
);
const hoje = new Date();

const ano = hoje.getFullYear();

const mes =
    String(hoje.getMonth() + 1)
        .padStart(2, "0");

const dia =
    String(hoje.getDate())
        .padStart(2, "0");


const dataAtual =
    `${ano}-${mes}-${dia}`;


campoData.min = dataAtual;

console.log(
    "RUMO - Plataforma de Turismo e Viagens carregada com sucesso."
);

const menuMobile = document.getElementById("menuMobile");

const navbar = document.querySelector(".navbar");

const iconeMenu = menuMobile.querySelector("i");

menuMobile.addEventListener("click", function () {

    navbar.classList.toggle("aberto");

    const menuAberto =
        navbar.classList.contains("aberto");


    menuMobile.setAttribute(
        "aria-expanded",
        menuAberto
    );

    if (menuAberto) {

        iconeMenu.classList.remove("fa-bars");
        iconeMenu.classList.add("fa-xmark");

    } else {

        iconeMenu.classList.remove("fa-xmark");
        iconeMenu.classList.add("fa-bars");

    }

});

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("aberto");

        menuMobile.setAttribute(
            "aria-expanded",
            "false"
        );

        iconeMenu.classList.remove("fa-xmark");
        iconeMenu.classList.add("fa-bars");

    });

});

const usuarioEstaLogado =
    localStorage.getItem("usuarioLogado");

const dadosUsuario =
    localStorage.getItem("usuarioAtivoRumo");

   
if (
    usuarioEstaLogado !== "true" ||
    !dadosUsuario
) {

    window.location.href =
        "acesso.html";

}


if (
    usuarioEstaLogado === "true" &&
    dadosUsuario
) {

    const usuario =
        JSON.parse(dadosUsuario);


    console.log(
        "Usuário logado:",
        usuario.nome
    );


const nomeUsuario =
    document.getElementById("nomeUsuario");

if (nomeUsuario) {

    nomeUsuario.textContent =
        usuario.nome;

}

}

const usuarioHeader =
    document.getElementById("usuarioHeader");

const menuUsuario =
    document.getElementById("menuUsuario");

const nomeUsuarioMenu =
    document.getElementById("nomeUsuarioMenu");

if (
    usuarioEstaLogado === "true" &&
    dadosUsuario &&
    nomeUsuarioMenu
) {

    const usuarioMenu =
        JSON.parse(dadosUsuario);

    nomeUsuarioMenu.textContent =
        usuarioMenu.nome;
}

usuarioHeader.addEventListener("click", function (event) {

    event.stopPropagation();

    menuUsuario.classList.toggle("aberto");

});

document.addEventListener("click", function () {

    menuUsuario.classList.remove("aberto");

});

const btnSair = document.getElementById("btnSair");

if (btnSair) {
    btnSair.addEventListener("click", function () {


        localStorage.removeItem("usuarioLogado");

        localStorage.removeItem("usuarioAtivoRumo");

        window.location.href = "acesso.html";

    });
}

const botoesFavoritos =
    document.querySelectorAll(".favorito");

let destinosFavoritos =
    JSON.parse(localStorage.getItem("favoritosRumo")) || [];

botoesFavoritos.forEach(function (botao) {

    const nomeDestino =
        botao.dataset.destino;

    const imagemDestino =
        botao.dataset.imagem;

    if (!nomeDestino || !imagemDestino) {
        return;
    }

    const jaEstaFavoritado =
        destinosFavoritos.some(function (favorito) {
            return favorito.nome === nomeDestino;
        });

    if (jaEstaFavoritado) {

        const icone =
            botao.querySelector("i");

        icone.classList.remove("fa-regular");
        icone.classList.add("fa-solid");
    }

    botao.addEventListener("click", function () {

        const icone =
            botao.querySelector("i");

        const indiceFavorito =
            destinosFavoritos.findIndex(function (favorito) {
                return favorito.nome === nomeDestino;
            });

        if (indiceFavorito !== -1) {

            destinosFavoritos.splice(indiceFavorito, 1);

            icone.classList.remove("fa-solid");
            icone.classList.add("fa-regular");

        }
        else {

            const destino = {
                nome: nomeDestino,
                imagem: imagemDestino
            };

            destinosFavoritos.push(destino);

            icone.classList.remove("fa-regular");
            icone.classList.add("fa-solid");

        }

        localStorage.setItem(
            "favoritosRumo",
            JSON.stringify(destinosFavoritos)
        );

    });

});