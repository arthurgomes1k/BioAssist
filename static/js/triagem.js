document.getElementById('botao_adicionar').addEventListener('click', function() {
    // Cria um novo elemento div
    var newDiv = document.createElement('div');
    newDiv.classList.add('sintomas');

    // Cria um novo elemento input
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'input-field';
    newInput.placeholder = 'Digite algo...';

    // Adiciona o novo input dentro do novo div
    newDiv.appendChild(newInput);

    // Adiciona o novo div dentro do container de inputs
    document.getElementById('inputs-container').appendChild(newDiv);
});