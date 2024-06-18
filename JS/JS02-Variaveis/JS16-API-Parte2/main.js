let cep = document.querySelector ("#cep");
let message = document.querySelector ("#erroMessage");
let rua = document.querySelector ("#rua");
let complemento = document.querySelector ("#complemento");
let bairro = document.querySelector ("#bairro");
let cidade = document.querySelector ("#cidade");
let estado = document.querySelector ("#uf");

cep, addEventListener ("focusout", async () => {
    try {
        const onlyNumbers = /^[0-9]+$/;
        const cepValid = /^[0-9]{8}$/;

        if (!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)) {
            throw {cep_error: 'CEP invalido'}
        }

        let retornoAPI = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

        console.log (retornoAPI);

        if (!retornoAPI.ok) {
            throw await retornoAPI.json ();
        }

        let response = await retornoAPI.json();

        console.log (response);
        cep.value = response.cep
        rua.value = response.logradouro
        complemento.value = response.complemento
        bairro.value = response.bairro
        cidade.value = response.localidade
        estado.value = response.uf
    }
    catch (error) {
        if (error?.cep_error) {
            message.textContent = error.cep_error;
            setTimeout (() => {
                message.textContent = "";
            }, 5000);
        }
        console.log (error)
    }
})