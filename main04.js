// var Circle = function(radius){
//   this._radius = radius;
// };
// Circle.prototype = {
//   set radius(r) { this._radius=r; },
//   get radius() {return this._radius; },
//   get area() { return Math.PI * this._radius * this._radius; }
// };
//
// var circ = new Circle(10);
// circ.radius = 15;
// console.log(circ.radius);
// console.log(circ.area.toFixed(2));

// function Animal(){
//   this.name = "Animal";
//   this.toString = function(){
//     return "My name is "+this.name;
//   };
// }
// function Canine(){
//   this.name = "Canine";
// }
// function Wolf(){
//   this.name = "Wolf";
// }
// Canine.prototype = new Animal();
// Wolf.prototype = new Canine();
// Canine.prototype.constructor = Canine;
// Wolf.prototype.constructor = Wolf;
//
// var arcticWolf = new Wolf();
// console.log(arcticWolf.toString());
// console.log(arcticWolf instanceof Animal);

// a = [1,2,3,4,5];
// for(let i=0; i<a.length; i++){
//   console.log(a[i]);
// }

// {
//   function foo() {return 1;}
//   console.log(foo() === 1);
//   {
//     function foo() {return 2;}
//     console.log(foo() === 2);
//   }
//   console.log(foo()===1);
// }

// evens = [1,2,3,4];
// odds = evens.map(v => v+1);
// console.log(odds);
//
// // ## list comprehension
// var mylist2 = Array.from( {length: 10}, (_, i) => 5+i*2 );
// console.log(mylist2);

// ## closure
// {
//   let a=10;
//   var b=1;
//   console.log(a);
// }

// ## avoid error of all a[i]=10. If use var i, all i points to the only global i
// var a=[]
// for (let i=0; i<10; i++){
//   a[i] = function(){
//     console.log(i);
//   };
// }
// a[6]();

// ## let variable must be defined before use
// console.log(foo);
// var foo = 2;
// console.log(bar);
// let bar=2;

// var tmp=new Date();
// function f(){
//   console.log(tmp);
//   if(false){
//     let tmp = 'hello'; // cannot be var, will overwrite outer tmp
//   }
// }
// f();

// ## memory leakage. i not colllected
// var s = 'hello';
// for(var i=0; i<s.length; i++){
//   console.log(s[i]);
// }
// console.log(i);

// ## only this form is allowed for same f() in ES6
// function f() { console.log('I am outside!'); }
// {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }
//   f();
// }

// var a=1;
// console.log(this.a);
// let b=1;
// console.log(this.b);

// let [a,,c]=[1,2,3];
// let [head, ...tail] = [1,2,3,4];
// let [x,y,z] = new Set(['a','b','c']);
// console.log(a);
// // console.log(b);
// console.log(c);
// console.log(head);
// console.log(tail);
// console.log(x+","+y+","+z );

// function f(){
//   console.log('aaa');
// }
// let [x=f()] = [1];
// let { foo:a,bar:b} = {foo:'mom', bar:'dad'};
// console.log(a);
// console.log(b);

// const [c,d,e,f,g] = 'hello';
// console.log(`${c} ${d} ${e} ${f} ${g}`);
// let {length: len} = 'hello';
// console.log(len);

// let x=1, y=2;
// [x,y] = [y,x];
// console.log(`${x} ${y}`);
//
// let jsonData = {
//   id: 42,
//   status: "ok",
//   data: [867,5389]
// };
// let { id, status, data: number } = jsonData;
// console.log(id,status, number);

// console.log(`in js this
//   is legal`);

// ## string template
// let total = 30, num=2;
// let sender = "<script>alert('abc')</script>";
// let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
// let message = SaferHTML`<p>${sender} has sent you ${num} message</p>`;
//
// function passthru(literals){
//   let result = '';
//   let i=0;
//   while(i<literals.length){
//     result += literals[i++];
//     if (i<arguments.length){
//       result += arguments[i];
//     }
//   }
//   return result;
// }
// function SaferHTML(templateData){
//   let s = templateData[0];
//   console.log(arguments);
//   for(let i=1; i<arguments.length; i++){
//     let arg = String(arguments[i]);
//     // escape char
//     s += arg.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;");
//     s += templateData[i];
//   }
//   return s;
// }
//
// console.log(msg);
// console.log(message);

console.log(String.raw`hi\n`);

var pattern = /(\w+)/g;
var result = "visit my blog".match(pattern);
console.log(result);











