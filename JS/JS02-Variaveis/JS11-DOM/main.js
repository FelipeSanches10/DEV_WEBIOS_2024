prompt('Qual é o nome do seu time?');

if (time === 'Corinthians') {
    alert('O time é o Corinthians');
    document.body.style.backgroundColor = 'black';
} else if (time === 'Sao Paulo') {
    alert('O time é o São Paulo');
    document.body.style.backgroundColor = 'yellow';
} else if (time === 'Palmeiras') {
    alert('O time é o Palmeiras')
    document.body.style.backgroundColor = 'red';
} else {
    alert('Não sei qual é o seu time então');
}