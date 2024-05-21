// const number = [-2, 40, 16, 111, 33, 64];

// console.log(number[3]);

// const array = ["Mãe", "Pai", "Vó", "Vô", "Tia", "gato", "Tio", "Alguém"];
// console.log(`${array[7]} ${array[1]}`);


// const bidi = [
//     ['Banana', 'Maçã', 'Morango'],
//     ['Laranja', true, 1],
//     [null, 'Uva', -350]
// ]

// console.log(bidi);

// var products = [
//     ['Pipoca', 'arroz', 'feijão', 'batata'],
//     ['molho de tomate', 'alface', 'leite em pó', 'detergente'],
//     ['leite de coco', 'candida', 'Maçã', 'vinagre'],
//     ['bolacha', 'azeite', 'limão', 'shampoo']
// ]

// console.log(`${products[0][2]}, ${products[1][3]}, ${products[2][2]}, ${products[3][3]}`);


// const moeda = ["Real", "Euro", "Coroa", "Dolar"];

// moeda[2] = 'yen';

// console.log(moeda);


// const array = [12, 3, 54, 19, 5];

// const newArray = array.toString();
// console.log(typeof newArray);
// console.log(newArray);

// const test1 = [12, 43, 534, 85, 566];
// let changed1 = test1.join(" - ");
// let changed2 = test1.toString();

// console.log(changed1);
// console.log(changed2);

// const array = [0, 2, 4, 5, 7];
// console.log(array.length);

const chagedArray = ["Uva", "Morango", "Banana", "Maçã"];

chagedArray.pop();

const chanded1 = chagedArray.push("Kiwi");
console.log(chagedArray);

const changed2 = chagedArray.shift();
console.log(chagedArray);

const chanded3 = chagedArray.unshift("Caqui");
console.log(chagedArray);

delete chagedArray[2];
console.log(chagedArray);