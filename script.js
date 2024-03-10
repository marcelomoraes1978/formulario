function validarCampos() {
    // Obter os valores dos campos
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("fone").value;

    // Verificar se o nome contém apenas letras
    var regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!regexNome.test(nome)) {
        alert("Por favor, digite um nome válido contendo apenas letras e espaços.");
        return;
    }

    // Verificar se o telefone contém apenas números
    var regexTelefone = /^[0-9]+$/;
    if (!regexTelefone.test(telefone)) {
        alert("Por favor, digite um número de telefone válido contendo apenas números.");
        return;
    }

    // Se todas as validações passarem, chame a função enviarFormulario
    enviarFormulario();
}

function enviarFormulario() {
    // Obter os valores dos campos
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("fone").value;
    var email = document.getElementById("email").value;
    var observacao = document.getElementById("observacao").value;

    // Construir a mensagem a ser exibida
    var mensagem = "Nome: " + nome + "\nTelefone: " + telefone + "\nEmail: " + email + "\nObservação: " + observacao;

    // Exibir a mensagem
    alert("Formulário enviado com sucesso!\n\n" + mensagem);
}
