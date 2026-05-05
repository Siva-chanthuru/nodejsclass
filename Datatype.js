let bool=true;

console.log(bool);
console.log(typeof bool);

let x;
console.log(x);
console.log(typeof x);

let y=null;
console.log(y);
console.log(typeof y);

let ar=[1,2,3,4,5];
console.log(ar);
console.log(typeof ar);

let obj={
    name:"John",   age:30}
console.log(obj);
console.log(typeof obj);

let fun=function(){
    console.log("Hello");
}
console.log(fun);
console.log(typeof fun);

let sym=symbol("Hello");
console.log(sym);
console.log(typeof sym);

let bigInt=1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(typeof bigInt);

const PI=3.14;
console.log(PI);

let a=10;
let b=a;
console.log(`a: ${a}`); // 10
console.log(`b: ${b}`); // 10
b=20;
console.log(`a: ${a}`); // 10
console.log(`b: ${b}`); // 20

let a={name:"Siva"};
let b=a;
console.log(`a: ${a.name}`); // Siva
console.log(`b: ${b.name}`); // Siva
b.name="Chanthuru";
console.log(`a: ${a.name}`); // Chanthuru
console.log(`b: ${b.name}`); // Chanthuru

let a=[1,2,3];
let b=a;
console.log(`a: ${a}`); // [1,2,3]
console.log(`b: ${b}`); // [1,2,3]
b.push(4);
console.log(`a: ${a}`); // [1,2,3,4]
console.log(`b: ${b}`); // [1,2,3,4]







