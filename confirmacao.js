
const dadosSalvos =
    sessionStorage.getItem("reservaRumo");

if (!dadosSalvos) {

    window.location.replace("index.html#destinos");

} else {

    const reserva = JSON.parse(dadosSalvos);

    document.getElementById("numeroReserva").textContent =
        reserva.numero;

    const partesData = reserva.data.split("-");

const dataFormatada =
    `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

document.getElementById("confirmacaoData").textContent =
    dataFormatada;

    document.getElementById("confirmacaoNome").textContent =
        reserva.nome;

    
    document.getElementById("confirmacaoData").textContent =
        reserva.data;

    document.getElementById("confirmacaoViajantes").textContent =
        reserva.viajantes;

       const formasPagamento = {
    pix: "PIX",
    credito: "Cartão de crédito",
    debito: "Cartão de débito"
};

document.getElementById("confirmacaoPagamento").textContent =
    formasPagamento[reserva.pagamento] || reserva.pagamento;

    document.getElementById("confirmacaoTotal").textContent =
        Number(reserva.total).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

}
