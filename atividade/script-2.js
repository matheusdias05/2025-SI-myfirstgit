// Seleciona o formulário e a div para exibir a resposta
const dataForm = document.getElementById('dataForm');
const responseMessageDiv = document.getElementById('responseMessage');

// URL do endpoint POST no mockable.io
const apiUrl = 'https://demo1234567.mockable.io/submit';

// Função para enviar os dados do formulário
async function sendData(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    // Captura os dados do formulário
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
    };

    try {
        // Faz a requisição POST
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
            },
            body: JSON.stringify(formData), // Converte os dados para JSON
        });

        // Verifica se a resposta é válida
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados');
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Exibe a resposta do servidor na div
        responseMessageDiv.innerHTML = `<p style="color: green;">${data.mensagem}</p>`;
    } catch (error) {
        // Exibe uma mensagem de erro caso algo dê errado
        responseMessageDiv.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
    }
}

// Adiciona um evento de submit ao formulário
dataForm.addEventListener('submit', sendData);