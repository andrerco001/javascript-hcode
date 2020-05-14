//function calc(x, y, operator){
//    
//    return eval(`${x} ${operator} ${y}`);
//}
//
//let result = calc(10, 2, "-");
//console.log(result);

// Arrow function
let calc = (x, y, operator) => {

    return eval(`${x} ${operator} ${y}`);
}

let result = calc(10, 2, "-");
console.log(result);

// DOM - Document Objet Model
window.addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log('click');
});

// TimeStamp since 01/01/1970
// let now = Date.now();
let now = new Date();
console.log(now);

let dateFormat = `${now.getDay()+10}/${now.getMonth()+1}/${now.getFullYear()}`;
console.log(dateFormat);

console.log(now.toLocaleDateString("pt-br"));

// Arrays
console.log('Cars for rent :')
let cars = ['Civic 2015', 'Corolla 2018', 'Kia Rio 2013'];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// foreach
console.log('foreach default');
cars.forEach(function (value, index) {
    console.log(index, value);
});

// foreach with arrow function
console.log('foreach with arrow function');
cars.forEach((value, index) => {
    console.log(index, value);
});

// POO - object-oriented programming
let cellPhone = function () {
    this.color = "silver";
    this.call = function () {
        return 'Call';
    }
}

let obj1 = new cellPhone();
console.log(obj1.color);
console.log(obj1.call());

// Class with the new ECMAScript definitions
class CellPhone {

    constructor() {
        this.color = 'gold';
    }
    call = function () {
        return 'Call';
    }
}

let obj2 = new CellPhone();
console.log(obj2.color);
console.log(obj2.call());