// Javascript course

// The command var is used to declare a variable, on the other hand, the command let is also used for the declaration, however, the scope is local. The command const declares a constant;

let jsCourse = 'Javascript Course';
console.log(jsCourse);

let string = 'Lilys';
let age = 4;
let weight = 7.5;
let isJolie = true;

// Operators
// Comparation operators
let a = 10; // assignment
const b = "10";

console.log(a == b); // comparation (value)
console.log(a === b); // comparation (value and type)
console.log(a != b) // different

// Arithmetic Operators
// + - * / % **

// Relational operators
// > >= < <= 


// Logical operators
// AND && OR ||

// ++ -- += -+ *= /=

// Conditional structures
// if - if else - if else if
console.log('if ~ else');
let color = 'green';

if (color === 'green') {
    console.log('Move on!');
} else if (color === 'yellow') {
    console.log('Attention!');
} else {
    console.log('Stop!');
}

// switch
console.log('switch case');
switch (color) {
    case 'green':
        console.log('Move on!');
        break;
    case 'yellow':
        console.log('Attention!');
        break;
    default:
        console.log('Stop!');
        break;
}

// Repeating structures - Loops
console.log('Calculator :');
let n = 2;
for(let i = 0; i <= 10; i++){
    console.log(`${i} X ${n} = ${i * n}`);
}
