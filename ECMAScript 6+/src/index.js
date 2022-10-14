//Se ocupa let en lugar de var, let solo esta disponible en el bloque de codigo en el que se utiliza, var funciona en global


function newFunction(name, age, country){
    var name = name || 'Diego';
    var edad = edad || 20;
    var country = country || 'MX';
    console.log(name, age, country);
}
//El codigo de abajo es el mismo de arriba pero mejor estilizado :D

//es6
function newFunction2(name = 'Diego', age = 20, country = 'MX'){
    console.log(name,age,country);
};
//Valores por defecto
newFunction2();
//Valores declarados
newFunction2('Fernanda',19,'AR');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 =  `${hello} ${world}`;
console.log(epicPhrase2);


let lorem = "Holaaa esta es una frase con muchas separaciones\n" +"Otra frase ajua"

//es6
let lorem2 = `Frase uno
Frase dos pero abajo`

console.log(lorem)
console.log(lorem2)

let person = {
    'name' : 'Diego',
    'age' : 32,
    'country' : 'MX'
}

console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name, age, country);

let team1 = ['Diego', 'Fernanda', 'Miguel'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
//es6
let education = ['David', ...team1, ...team2];

console.log(education);

let name = 'Diego';
let age = 20;
//es5
obj = {name : name, age: age};

//es6
obj2 = { name, age };
console.log(obj2)

//Funciones de tipo flecha
const names = [
    {name : 'Diego', age : 20}
    {name : 'Fernanda', age : 19}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})
//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}
const square = num => num * num; 

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
    if(true) {
        resolve('Hey');
    } else {
        reject('Ups!!');
    }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA +this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2))

