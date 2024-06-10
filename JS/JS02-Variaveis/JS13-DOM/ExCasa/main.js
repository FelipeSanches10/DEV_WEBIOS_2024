function calcularNovoSalario() {
    const salarioAtualInput = document.querySelector("#salarioAtual");
    const resultadoParagrafo = document.querySelector("#resultado");
  
    const salarioAtual = parseFloat(salarioAtualInput.value);
    if (isNaN(salarioAtual) || salarioAtual <= 0) {
      resultadoParagrafo.textContent = "Por favor, insira um salário válido.";
      return;
    }
  
    const aumentoPercentual = salarioAtual * 0.17;
    const novoSalario = salarioAtual + aumentoPercentual + 215;
    resultadoParagrafo.textContent = `Novo salário: R$ ${novoSalario.toFixed(2)}`;