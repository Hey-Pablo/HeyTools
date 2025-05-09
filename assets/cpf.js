function gerarCPF() {
    let noveDigitos = '';
    for (let i = 0; i < 9; i++) {
        noveDigitos += Math.floor(Math.random() * 10);
    }

    // Cálculo do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(noveDigitos.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    // Cálculo do segundo dígito verificador
    let dezDigitos = noveDigitos + digito1;
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(dezDigitos.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    const pontuacaoAtivada = document.getElementById("pontuacaoCPF").checked;
    let cpfFormatado = `${noveDigitos}${digito1}${digito2}`;

    if (pontuacaoAtivada) {
        cpfFormatado = `${noveDigitos.substring(0, 3)}.${noveDigitos.substring(3, 6)}.${noveDigitos.substring(6, 9)}-${digito1}${digito2}`;
    }

    document.getElementById("cpfResultado").value = cpfFormatado;
    document.getElementById("mensagemCopiado").style.opacity = 0; // Esconde a mensagem de copiado ao gerar um novo CPF
    document.getElementById("botaoCopiar").textContent = "Copiar"; // Reseta o texto do botão copiar
}

function copiarCPF() {
    const cpfParaCopiar = document.getElementById("cpfResultado");

    if (cpfParaCopiar.value) {
        cpfParaCopiar.select();
        document.execCommand("copy");
        document.getElementById("mensagemCopiado").style.opacity = 1;
        document.getElementById("botaoCopiar").textContent = "Copiado!";
        setTimeout(() => {
            document.getElementById("mensagemCopiado").style.opacity = 0;
            document.getElementById("botaoCopiar").textContent = "Copiar";
        }, 2000); // A mensagem "Copiado!" desaparece após 2 segundos
    }
}