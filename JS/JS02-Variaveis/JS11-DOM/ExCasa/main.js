function adicionarImagem() {
    const imagem = document.createElement('img');
    imagem.src = '/JS/JS-12-DOM-Parte2/exercicioCasa/umbrela.jpeg'; 
    imagem.alt = 'Umbrella Academy';
    document.getElementById('containerImagem').appendChild(imagem); 
    document.body.style.backgroundColor = '#262525';
}

function exibirMensagem() {
    const nome = prompt("Digite seu nome:");
    if (nome) {
        const mensagemBoasVindas = document.getElementById("mensagemBoasVindas"); 
        mensagemBoasVindas.textContent = `Olá ${nome}, bem-vindo à nossa academia!`;
    }
}

function calcularTabuada() {
    const numero = parseInt(prompt("Digite um número para ver a tabuada"));
    if (!isNaN(numero)) {
        let tabuada = "";
        for (let i = 1; i <= 10; i++) {
            tabuada += `${numero} x ${i} = ${numero * i}<br>`;
        }

        const resultadoTabuada = document.getElementById("resultadoTabuada");
        resultadoTabuada.innerHTML = tabuada;
     } else {
            alert("Por favor, digite um número válido.")
        }
    }