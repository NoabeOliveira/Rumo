const pacotes = {

    maceio: {
        nome: "Maceió",
        pais: "Brasil",
        preco: 1299
    },

    paris: {
        nome: "Paris",
        pais: "França",
        preco: 4899
    },

    bariloche: {
        nome: "Bariloche",
        pais: "Argentina",
        preco: 2199
    },

    santorini: {
        nome: "Santorini",
        pais: "Grécia",
        preco: 5499
    },

    "nova-york": {
        nome: "Nova York",
        pais: "Estados Unidos",
        preco: 4299
    }

};

const parametros =
    new URLSearchParams(window.location.search);

const destinoSelecionado =
    parametros.get("destino");

const pacote =
    pacotes[destinoSelecionado] || pacotes.maceio;

const resumoDestino =
    document.getElementById("resumoDestino");

const resumoPais =
    document.getElementById("resumoPais");

const valorPessoa =
    document.getElementById("valorPessoa");

const quantidadeViajantes =
    document.getElementById("quantidadeViajantes");

const valorTotal =
    document.getElementById("valorTotal");

const campoViajantes =
    document.getElementById("viajantes");

const btnFinalizar =
    document.getElementById("btnFinalizar");

function formatarDinheiro(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}

resumoDestino.textContent =
    pacote.nome;

resumoPais.textContent =
    pacote.pais;

valorPessoa.textContent =
    formatarDinheiro(pacote.preco);


function atualizarTotal() {

    const viajantes =
        Number(campoViajantes.value);

    const total =
        pacote.preco * viajantes;

    quantidadeViajantes.textContent =
        viajantes;

    valorTotal.textContent =
        formatarDinheiro(total);

}

atualizarTotal();

campoViajantes.addEventListener(
    "change",
    atualizarTotal
);


btnFinalizar.addEventListener(
    "click",
    function () {

        const nome =
            document.getElementById("nome").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const telefone =
            document.getElementById("telefone").value.trim();

        const dataViagem =
            document.getElementById("dataViagem").value;

        if (
            nome === "" ||
            email === "" ||
            telefone === "" ||
            dataViagem === ""
        ) {

            alert(
                "Preencha todos os dados da reserva."
            );

            return;
        }

        const pagamento =
            document.querySelector(
                'input[name="pagamento"]:checked'
            );


        if (!pagamento) {

            alert(
                "Selecione uma forma de pagamento."
            );

            return;
        }

        console.log(
            "Destino:",
            pacote.nome
        );

        console.log(
            "Viajantes:",
            campoViajantes.value
        );

        console.log(
            "Pagamento:",
            pagamento.value
        );

        const numeroReserva =
    "RUMO-" + Date.now();

const reserva = {
    numero: numeroReserva,
    destino: pacote.nome,
    nome: nome,
    data: dataViagem,
    viajantes: quantidade,
    pagamento: pagamento.value,
    total: pacote.preco * quantidade
};

sessionStorage.setItem(
    "reservaRumo",
    JSON.stringify(reserva)
);

window.location.href = "confirmacao.html";


    }
);

const botaoDiminuir =
    document.getElementById("diminuir-viajantes");

const botaoAumentar =
    document.getElementById("aumentar-viajantes");

const numeroViajantes =
    document.getElementById("quantidade-viajantes");


let quantidade = Number(campoViajantes.value) || 1;

function atualizarQuantidadeViajantes() {

    
    numeroViajantes.textContent = quantidade;

    
    campoViajantes.value = String(quantidade);

    
    quantidadeViajantes.textContent = quantidade;

    
    const total = pacote.preco * quantidade;

    valorTotal.textContent =
        formatarDinheiro(total);

}

botaoAumentar.addEventListener("click", function () {

    const limiteMaximo =
        Math.max(
            ...Array.from(campoViajantes.options)
                .map(opcao => Number(opcao.value))
                .filter(Number.isFinite)
        );

    if (quantidade < limiteMaximo) {

        quantidade++;

        atualizarQuantidadeViajantes();

    }

});

botaoDiminuir.addEventListener("click", function () {

    if (quantidade > 1) {

        quantidade--;

        atualizarQuantidadeViajantes();

    }

});

campoViajantes.addEventListener("change", function () {

    quantidade = Number(campoViajantes.value);

    atualizarQuantidadeViajantes();

});

atualizarQuantidadeViajantes();

botaoDiminuir.addEventListener(
    "click",
    function () {

        if (quantidade > 1) {

            quantidade--;

            atualizarQuantidadeViajantes();

        }

    }
);

atualizarQuantidadeViajantes();