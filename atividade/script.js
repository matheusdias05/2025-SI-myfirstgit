// Selecionando o botão e o elemento que será alterado
const changeColorButton = document.getElementById('changeColorButton');
const contentSection = document.getElementById('content');

// Função para mudar a cor de fundo ou do texto
function changeColor() {
    // Alternar entre duas cores de fundo
    if (contentSection.style.backgroundColor === 'lightblue') {
        contentSection.style.backgroundColor = 'lightcoral';
        contentSection.style.color = 'black'; // Mudar a cor do texto
    } else {
        contentSection.style.backgroundColor = 'lightblue';
        contentSection.style.color = 'white'; // Mudar a cor do texto
    }
}

// Adicionando um evento de clique ao botão
changeColorButton.addEventListener('click', changeColor);

// Selecionando elementos
const addItemButton = document.getElementById('addItemButton');
const newItemInput = document.getElementById('newItemInput');
const itemList = document.getElementById('itemList');

// Função para adicionar um novo item à lista
function addItem() {
    const itemText = newItemInput.value.trim(); // Obtém o valor do campo de texto e remove espaços em branco

    if (itemText !== '') { // Verifica se o campo não está vazio
        const newItem = document.createElement('li'); // Cria um novo elemento <li>
        newItem.textContent = itemText; // Define o texto do item

        // Adiciona um evento de duplo clique para remover o item
        newItem.addEventListener('dblclick', function () {
            itemList.removeChild(newItem); // Remove o item da lista
        });

        itemList.appendChild(newItem); // Adiciona o novo item à lista
        newItemInput.value = ''; // Limpa o campo de texto
    } else {
        alert('Por favor, digite um item válido.'); // Alerta se o campo estiver vazio
    }
}

// Adicionando um evento de clique ao botão "Adicionar Item"
addItemButton.addEventListener('click', addItem);

// Opcional: Permitir adicionar itens pressionando "Enter" no campo de texto
newItemInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem();
    }
});

// Seleciona o elemento onde a mensagem será exibida
const apiResponseDiv = document.getElementById('apiResponse');

// URL do endpoint no mockable.io
const apiUrl = 'http://demo1972888.mockable.io/';

// Função para buscar dados da API
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

        // Exibe a mensagem no <div>
        apiResponseDiv.innerHTML = `<p>${data.mensagem}</p>`;
    } catch (error) {
        // Exibe uma mensagem de erro caso algo dê errado
        apiResponseDiv.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
    }
}

// Chama a função para buscar os dados quando a página carregar
fetchData();

// Seleciona o formulário e a div para exibir a resposta
// const dataForm = document.getElementById('dataForm');
// const responseMessageDiv = document.getElementById('responseMessage');

// // URL do endpoint POST no mockable.io
// const apiUrl= 'http://demo1972888.mockable.io/enviar-dados';

// // Função para enviar os dados do formulário
// async function sendData(event) {
//     event.preventDefault(); // Impede o comportamento padrão de recarregar a página

//     // Captura os dados do formulário
//     const formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//     };

//     try {
//         // Faz a requisição POST
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
//             },
//             body: JSON.stringify(formData), // Converte os dados para JSON
//         });

//         // Verifica se a resposta é válida
//         if (!response.ok) {
//             throw new Error('Erro ao enviar os dados');
//         }

//         // Converte a resposta para JSON
//         const data = await response.json();

//         // Exibe a resposta do servidor na div
//         responseMessageDiv.innerHTML = `<p style="color: green;">${data.mensagem}</p>`;
//     } catch (error) {
//         // Exibe uma mensagem de erro caso algo dê errado
//         responseMessageDiv.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
//     }
// }

// // Adiciona um evento de submit ao formulário
// dataForm.addEventListener('submit', sendData);


// // Seleciona o elemento <tbody> da tabela
// const usersTableBody = document.querySelector('#usersTable tbody');

// // URL do endpoint GET no mockable.io
// const apiUl = 'http://demo1972888.mockable.io/users';

// // Função para buscar e exibir os dados
// async function fetchData() {
//     try {
//         // Faz a requisição GET
//         const response = await fetch(apiUrl);

//         // Verifica se a resposta é válida
//         if (!response.ok) {
//             throw new Error('Erro ao carregar os dados da API');
//         }

//         // Converte a resposta para JSON
//         const data = await response.json();

//         // Limpa o conteúdo atual da tabela
//         usersTableBody.innerHTML = '';

//         // Itera sobre os dados e cria as linhas da tabela
//         data.forEach(user => {
//             const row = document.createElement('tr');

//             // Cria as células para cada propriedade do usuário
//             const idCell = document.createElement('td');
//             idCell.textContent = user.id;
//             row.appendChild(idCell);

//             const nameCell = document.createElement('td');
//             nameCell.textContent = user.nome;
//             row.appendChild(nameCell);

//             const emailCell = document.createElement('td');
//             emailCell.textContent = user.email;
//             row.appendChild(emailCell);

//             const ageCell = document.createElement('td');
//             ageCell.textContent = user.idade;
//             row.appendChild(ageCell);

//             // Adiciona a linha à tabela
//             usersTableBody.appendChild(row);
//         });
//     } catch (error) {
//         // Exibe uma mensagem de erro caso algo dê errado
//         console.error('Erro:', error);
//         usersTableBody.innerHTML = `<tr><td colspan="4" style="color: red;">Erro ao carregar os dados.</td></tr>`;
//     }
// }

// // Chama a função para buscar os dados quando a página carregar
// fetchData();