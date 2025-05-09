function gerarEmailComEstilo() {
    const estiloSelecionado = document.getElementById("estiloEmail").value;
    const dominioSelecionado = document.getElementById("dominioEmail").value;
    const dominiosAleatorios = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com.br', 'aol.com'];
    let dominioFinal = dominioSelecionado;
    let nomeUsuario = '';
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const nomesAleatorios = ['ana', 'carlos', 'maria', 'joao', 'lucas', 'sofia', 'pedro', 'isabela', 'gabriel', 'julia']; // Adicione mais nomes se quiser

    // Gerar nome de usuário com base no estilo
    switch (estiloSelecionado) {
        case 'formal':
            const nomesFormais = ['usuario', 'contato', 'info', 'suporte', 'atendimento'];
            const numerosFormais = Math.floor(Math.random() * 100);
            nomeUsuario = `${nomesFormais[Math.floor(Math.random() * nomesFormais.length)]}.${numerosFormais}`;
            break;
        case 'informal':
            const palavrasInformais = ['legal', 'conectado', 'rapido', 'online', 'super'];
            const apelidosInformais = ['fera', 'ninja', 'master', 'top', 'show'];
            nomeUsuario = `${palavrasInformais[Math.floor(Math.random() * palavrasInformais.length)]}.${apelidosInformais[Math.floor(Math.random() * apelidosInformais.length)]}`;
            break;
        case 'nome':
            const nomeSorteado = nomesAleatorios[Math.floor(Math.random() * nomesAleatorios.length)];
            const numeroAleatorioNome = Math.floor(Math.random() * 100); // Adiciona um número para variar um pouco
            nomeUsuario = `${nomeSorteado}.${numeroAleatorioNome}`;
            break;
        case 'aleatorio':
        default:
            const numCaracteres = Math.floor(Math.random() * 8) + 5;
            for (let i = 0; i < numCaracteres; i++) {
                nomeUsuario += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }
            break;
    }

    // Selecionar domínio
    if (dominioSelecionado === "aleatorio") {
        dominioFinal = dominiosAleatorios[Math.floor(Math.random() * dominiosAleatorios.length)];
    }

    const emailGerado = `${nomeUsuario}@${dominioFinal}`;
    document.getElementById("emailResultado").value = emailGerado;
}