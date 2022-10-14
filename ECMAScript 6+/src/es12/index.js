const string = "JavaScript es chido ajua, JavaScript es bueno";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

class Message {
    #show(val){
        console.log(val);
    };
    get #add(val){
        ...
    }
}
const message = new Message();
message.show("Hola");


const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));
//Retorna el primero que resuelva
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

class anyClass {
    constructor(element){
    this.ref = new WeakRef(element)
    } 
    { ... }
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ??= isFalse);
