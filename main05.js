// var my_object = {
//   '0': 'zero',
//   '1': 'one',
//   '2': 'two',
//   '3': 'three',
//   length: 4
// };
// 
// var unbound = Array.prototype.slice;
// var slicee = Function.prototype.call.bind(unbound);
// console.log(slicee([1,2,3,4],2));

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


