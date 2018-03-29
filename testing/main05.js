
function toString () {
  return `[${this.name}, ${this.age}]`;
}
// function Person (name,age) {
//   this.name = name;
//   this.age = age;
//   this.toString = toString;
// }
function person (name,age) {
  return {
    name: name,
    age: age,
    toString: toString
  };
}
// var p = {};
// Person.call(p, 'Justin', 35);
var p = person('Justin',35);
console.log(p.toString());

function Some(){}
// Some.data = 10;
var s = new Some()
// console.log(s.data);
console.log(Some.prototype);
s.toString = toString;
console.log(s);

var any = {}
console.log(any);


function aa(i, ...rest){
  console.log(i);
  console.log(...rest);
}
aa(1,2,3,4);
