document.addEventListener("DOMContentLoaded", function() {
    const botaoAdd = document.getElementById("botao_add");
    const sintomasDiv = document.querySelector(".sintomas");

    botaoAdd.addEventListener("click", function() {
        // Contar o número atual de sintomas
        const currentSintomas = sintomasDiv.querySelectorAll("label").length;
        const newSintomaNumber = currentSintomas + 1;

        // Criar o novo label
        const newLabel = document.createElement("label");
        newLabel.textContent = `Sintoma ${newSintomaNumber}:`;

        // Criar o novo input
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = `sintoma_${newSintomaNumber}`;
        newInput.id = `sintoma_${newSintomaNumber}`;

        // Inserir os novos elementos na div .sintomas antes do botão de adicionar
        sintomasDiv.insertBefore(newLabel, botaoAdd);
        sintomasDiv.insertBefore(newInput, botaoAdd);
    });
});