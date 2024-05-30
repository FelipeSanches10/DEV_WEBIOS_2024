class Carro {
    constructor(description, year, name) {
        this.description = description;
        this.year = year;
        this.name = name;
    }
}

const car1 = new Carro("Mercedes", 2018, "AMG A45");   
const car2 = new Carro("Porsche", 2015, "918 Spyder");   

function yearCar(yearNew) {
    return yearNew - this.year;
    // newYear = 2024
    // this.year = 2012
}

console.log(car1);
console.log(car2);

const newDate = new Date();
const recebeAno = newDate.getFullYear();

console.log(newDate);
console.log(recebeAno);

console.log(car1.yearCar(recebeAno));