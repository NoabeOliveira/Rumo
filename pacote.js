const pacotes = {

    maceio: {
        nome: "Maceió",
        pais: "Brasil",
        imagem: "imagens/tropmaceio.jpg",
        preco: "R$ 1.299",
        avaliacao: "4.9",
        duracao: "5 dias",
        hospedagem: "Hotel 4 estrelas",
        transporte: "Aéreo incluso",
        descricao:
            "Descubra as praias paradisíacas de Maceió em uma experiência completa, com hospedagem confortável e momentos inesquecíveis no litoral alagoano."
    },

    paris: {
        nome: "Paris",
        pais: "França",
        imagem: "imagens/ParisEiffel.jpg",
        preco: "R$ 4.899",
        avaliacao: "4.8",
        duracao: "7 dias",
        hospedagem: "Hotel 4 estrelas",
        transporte: "Aéreo incluso",
        descricao:
            "Conheça Paris e descubra alguns dos cenários mais famosos da França, combinando cultura, gastronomia, história e experiências inesquecíveis."
    },

    bariloche: {
        nome: "Bariloche",
        pais: "Argentina",
        imagem: "imagens/arbariloche.jpg",
        preco: "R$ 2.199",
        avaliacao: "4.7",
        duracao: "6 dias",
        hospedagem: "Hotel 4 estrelas",
        transporte: "Aéreo incluso",
        descricao:
            "Explore as paisagens de Bariloche, cercadas por montanhas, lagos e natureza, em uma viagem perfeita para quem busca aventura e tranquilidade."
    },

    santorini: {
        nome: "Santorini",
        pais: "Grécia",
        imagem: "imagens/teazulsantorini.jpg",
        preco: "R$ 5.499",
        avaliacao: "4.9",
        duracao: "7 dias",
        hospedagem: "Hotel 4 estrelas",
        transporte: "Aéreo incluso",
        descricao:
            "Viva uma experiência especial em Santorini, com suas construções brancas, mar azul e paisagens que fazem da ilha um dos destinos mais marcantes da Grécia."
    },

    "nova-york": {
        nome: "Nova York",
        pais: "Estados Unidos",
        imagem: "imagens/yorkcity.jpg",
        preco: "R$ 4.299",
        avaliacao: "4.8",
        duracao: "6 dias",
        hospedagem: "Hotel 4 estrelas",
        transporte: "Aéreo incluso",
        descricao:
            "Descubra Nova York e viva a energia de uma das cidades mais famosas do mundo, com atrações, cultura, gastronomia e experiências para todos os estilos."
    }

};

const parametros =
    new URLSearchParams(window.location.search);

const destinoSelecionado =
    parametros.get("destino");

const pacote =
    pacotes[destinoSelecionado];

if (pacote) {

    document.getElementById("pacoteNome").textContent =
        pacote.nome;

    document.getElementById("pacotePais").textContent =
        pacote.pais;

    document.getElementById("pacotePreco").textContent =
        pacote.preco;

    document.getElementById("pacoteAvaliacao").textContent =
        pacote.avaliacao;

    document.getElementById("pacoteDuracao").textContent =
        pacote.duracao;

    document.getElementById("pacoteHospedagem").textContent =
        pacote.hospedagem;

    document.getElementById("pacoteTransporte").textContent =
        pacote.transporte;

    document.getElementById("pacoteDescricao").textContent =
        pacote.descricao;

    const imagem =
        document.getElementById("pacoteImagem");

    imagem.src =
        pacote.imagem;

    imagem.alt =
        `Destino ${pacote.nome}`;

    document.title =
        `Rumo | ${pacote.nome}`;

    const btnReservar =
        document.getElementById("btnReservar");

    if (btnReservar) {

        btnReservar.href =
            `checkout.html?destino=${destinoSelecionado}`;

    }

}
else {

    window.location.href =
        "index.html#destinos";

}