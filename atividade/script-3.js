// Seleciona o elemento <tbody> da tabela
const usersTableBody = document.querySelector('#usersTable tbody');

// URL do endpoint GET no mockable.io
const apiUrl = 'https://demo1234567.mockable.io/users';

// Função para buscar e exibir os dados
async function fetchData() {
    try {
        // Faz a requisição GET
        const response = await fetch(apiUrl);

        // Verifica se a resposta é válida
        if (!response.ok) {
            throw new Error('Erro ao carregar os dados da API');
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Limpa o conteúdo atual da tabela
        usersTableBody.innerHTML = '';

        // Itera sobre os dados e cria as linhas da tabela
        data.forEach(user => {
            const row = document.createElement('tr');

            // Cria as células para cada propriedade do usuário
            const idCell = document.createElement('td');
            idCell.textContent = user.id;
            row.appendChild(idCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = user.nome;
            row.appendChild(nameCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = user.email;
            row.appendChild(emailCell);

            const ageCell = document.createElement('td');
            ageCell.textContent = user.idade;
            row.appendChild(ageCell);

            // Adiciona a linha à tabela
            usersTableBody.appendChild(row);
        });
    } catch (error) {
        // Exibe uma mensagem de erro caso algo dê errado
        console.error('Erro:', error);
        usersTableBody.innerHTML = `<tr><td colspan="4" style="color: red;">Erro ao carregar os dados.</td></tr>`;
    }
}

// Chama a função para buscar os dados quando a página carregar
fetchData();