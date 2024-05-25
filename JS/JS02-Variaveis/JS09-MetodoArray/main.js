// const fruits = ["Maça", "Uva", "Morango"];

// // fruits.forEach(returnInfo);
// // function returnInfo(nameFruit, index) {
// //     console.log(`Name: ${nameFruit}`);
// //     console.log(`Index: ${index}`);
// // }


// fruits.forEach(test = (nameFruit, index) => {
//     console.log(`Name: ${nameFruit}`);
//     console.log(`Index: ${index}`);
// })


let tasks = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
    },
    {
        id: 2,
        isPronta: false,
        nomeTarefa: "Ir pra Casa"
    },
    {
        id: 3,
        isPronta: false,
        nomeTarefa: "Dormir"
    }
];

// tasks.forEach((tasks) => console.log(tasks.nomeTarefa));
 


// const numbers = [2, 4, 12, 34, 79];
// const newNumber = numbers.map(Math.sqrt);

// console.log(`Array antigo: ${numbers}`);
// console.log(`Array novo: ${newNumber}`);


// const mapText = tasks.map((returnTask) => {
//     console.log(returnTask.nomeTarefa);
// })


// const multipliedByTwo = numbers.map((item) => {
//     return item * 2;
// });
    
// console.log(multipliedByTwo);




// const array = [12, 43, 4, 75, 5];

// const result = array.filter(returnFilter) 

// function returnFilter(num) {
//     return num > 30;
// }

// console.log(result);


const taskFilter = tasks.filter((resultFilter) => {
    return resultFilter.isPronta === false;
});

console.log(taskFilter);


const shoots = [
    {marca: "nike", quantidade: 3},
    {marca: "adidas", quantidade: 5},
    {marca: "puma", quantidade: 7}
]

shoots.find((returnFind) => {
    console.log(returnFind.marca = "Puma");
})



