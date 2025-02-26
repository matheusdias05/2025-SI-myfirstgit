// Seleciona os elementos do DOM
const userForm = document.getElementById('userForm');
const usersTableBody = document.querySelector('#usersTable tbody');
const submitButton = document.getElementById('submitButton');
const cancelButton = document.getElementById('cancelButton');

// URL do endpoint no mockable.io
const apiUrl = 'https://demo1234567.mockable.io/users';

// Lista de usuários (simulando um banco de dados local)
let users = [];

// Função para buscar os dados da API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Erro ao carregar os dados');
        users = await response.json();
        renderTable();
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para renderizar a tabela
function renderTable() {
    usersTableBody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>${user.idade}</td>
            <td>
                <button onclick="editUser(${user.id})">Editar</button>
                <button onclick="deleteUser(${user.id})">Excluir</button>
            </td>
        `;

        usersTableBody.appendChild(row);
    });
}

// Função para adicionar/editar um usuário
userForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (userId) {
        // Simulação de UPDATE
        const userIndex = users.findIndex(user => user.id == userId);
        users[userIndex] = { id: userId, nome: name, email, idade: age };
    } else {
        // Simulação de CREATE
        const newUser = { id: users.length + 1, nome: name, email, idade: age };
        users.push(newUser);

        // Envia um POST para o mockable.io (simulação)
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser),
            });
            if (!response.ok) throw new Error('Erro ao adicionar usuário');
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    renderTable();
    userForm.reset();
    submitButton.textContent = 'Adicionar';
    cancelButton.style.display = 'none';
});

// Função para editar um usuário
window.editUser = (id) => {
    const user = users.find(user => user.id == id);
    document.getElementById('userId').value = user.id;
    document.getElementById('name').value = user.nome;
    document.getElementById('email').value = user.email;
    document.getElementById('age').value = user.idade;
    submitButton.textContent = 'Atualizar';
    cancelButton.style.display = 'inline-block';
};

// Função para excluir um usuário
window.deleteUser = (id) => {
    users = users.filter(user => user.id != id); // Simulação de DELETE
    renderTable();
};

// Função para cancelar a edição
cancelButton.addEventListener('click', () => {
    userForm.reset();
    submitButton.textContent = 'Adicionar';
    cancelButton.style.display = 'none';
});

// Carrega os dados ao iniciar
fetchData();