// let f = function(){
//   this.a = 1;
//   this.b = 2;
// }
// let o = new f();
// 
// console.log(o)
// f.prototype.b = 3;
// f.prototype.c = function(){
//   this.d = 4;
// };
// 
// console.log(o.a)
// console.log(o.b)
// console.log(o.c)
// console.log(o.d)


// let o = {
//   a:2, 
//   m: function(){
//     return this.a+1;
//   }
// };
// 
// console.log(o.m())
// let p = Object.create(o);
// 
// p.a = 4;
// // method overriding
// // this points to inheriting object
// p.m = function(){
//   return 'helloworld: '+this.a;
// }
// console.log(p.m())
// console.log(p)


// let o = {a: 1};
// // o has Object.prototype as its [[Prototype]]
// // o inherits hasOwnProperty from Object.prototype
// // o --> Object.prototype --> null
// let b = ['yo', 'whatdup', '?'];
// // Arrays inherits from Array.prototype (has methods indexOf, forEach ..)
// // b --> Array.prototyp --> Object.prototype --> null
// function f(){
//   return 2;
// }
// // Functions inherit from Function.prototype (methods call, bind ...)
// // f --> Function.prototype --> Object.prototype --> null


// function Graph(){
//   this.vertices = [];
//   this.edges = [];
// }
// Graph.prototype = {
//   addVertex: function(v){
//     this.vertices.push(v);
//   }
// };
// var g = new Graph();
// g.addVertex(23)
// console.log(g.vertices)
// console.log(g)


// let a = {a: 1}
// let b = Object.create(a)
// b.prototype = {
//   eatB: function(){
//     console.log('11')
//   },
//   propB: 10
// }
// // b-->a-->Object.prototype-->null
// console.log(b.a)
// let c = Object.create(b)
// c.prototype = {
//   eatC: function(){
//     console.log('22')
//   },
//   propC: 12
// }
// let d = Object.create(b)
// // c.prototype.propC = 12
// // c-->b-->a-->Object.prototype-->null
// b.prototype.eatB()
// 
// console.log(b)
// console.log(c)
// console.log(d)
// 
// c.__proto__.prototype.eatB()
// console.log(c.__proto__.prototype.propB)
// d.prototype.eatB()
// // c.eatB()
// // console.log(c.prototype.eatB)


// let proto = {
//   describe: function(){
//     return 'this name is '+this.name;
//   }
// };
// // let obj = {
// //   [[Prototype]]: proto,
// //   name: 'obj'
// // };
// let obj = Object.create(proto);
// obj.name = 'objss'
// 
// console.log(obj)
// console.log(obj.describe())


// function Foo(name){
//   this.name = name;
//   console.log('hello')
// }
// // when create object from constructor Foo, Foo is in __proto__ and === Foo.prototype
// let b = new Foo('b')
// let a = new Foo('a')
// b.say = function(){
//   console.log('hi form '+this.whoAmI)
// }
// 
// Foo.prototype.door = 'south'
// 
// console.log(a)
// console.log(b)
// // console.log(a.__proto__ === Foo.prototype)
// console.log(Foo)
// console.log(Foo.prototype)


// function Foo(y){ // __proto__ -> Function.prototype
//   this.y = y
// }
// Foo.prototype.x = 10; // to Foo.prototype. __ptoto__ -> Object.prototype
// Foo.prototype.calculate = function(z){ // to Foo.prototype
//   return this.x+this.y+z
// }
// 
// let b = new Foo(20)  // __proto__ -> Foo.prototype
// b.calculate = function(z){
//   return z;
// }
// console.log(b.calculate(30))
// console.log(b)

let i = new Number(1.35)
let j = 1.35
console.log(j.toFixed())











