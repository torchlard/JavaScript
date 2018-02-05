// var _ = require("underscore")._;

// function lameCSV(str){
//   return _.reduce(str.split("\n"), function(table, row){
//     table.push( _.map(row.split(","), function(c){ return c.trim()} ));
//     return table;
//   }, []);
// };
// 
// var people = lameCSV("name,age,hair \n Merble,35,red \n Bob,64,blonde");
// console.log(people);

// var rooms = ["h1", "h2", "h3"]
// var newRoomes = rooms.map(function (rm){
//   if (rm=="h3") { return "h4"; }
//   else { return rm; }
// });
// console.log(rooms);
// console.log(newRoomes);

// var p = {
//   x:1.0,
//   y:1.0,
//   get r() { return Math.sqrt(this.x*this.x+this.y*this.y); },
//   set r(newValue){
//     var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
//     var ratio = newValue/oldValue;
//     this.x *= ratio;
//     this.y *= ratio;
//   },
//   get theta() { return Math.atan2(this.y, this.x); }
// };
// 
// console.log(p.x);
// console.log(p.y);
// p.r = 12.3;
// console.log(p.x);
// console.log(p.y);
// console.log(p.theta);

// var o = {};
// Object.defineProperty(o, "x", { 
//   value:1, writable:false, enumerable:true, configurable:true
// });
// Object.defineProperty(o, "y", {
//   value:'a', writable:true, enumerable:true, configurable: true
// });
// console.log(o.x);
// o.x=2;
// console.log(o.x);
// console.log(Object.keys(o));

// var p = {x:1,y:2,z:{z1:3, z2:4}};
// var o = Object.create(p);
// console.log(p.isPrototypeOf(o));
// 
// var fixed = Object.seal(Object.create(Object.freeze({x:1}), {y: {value:2, writable:true}} ));
// cd = JSON.stringify(p);
// console.log(cd);
// ab = JSON.parse(cd);
// console.log(ab);

// var a = [1,2,3,4,5,6,7,9];
// var sum=0;
// a.forEach(function(value){ sum+= value; })
// console.log(sum);
// 
// a2 = [1,2,3];
// b1 = a2.map(function(x) { return x*x; })
//        .map(function(y) { return y+2; })
//        .filter(function(z){ return z<7; });
// console.log(b1);

// ## constructor
// function Rectangle(w,h){
//   this.width = w;
//   this.height = h;
//   // this.area = function(){
//   //   return this.width*this.height;
//   // }
// }
// Rectangle.prototype.area = function() {return this.width*this.height; }
// var rect1 = new Rectangle(4,5);
// // rect1.area = function(){ return this.width*this.height; }
// rect1.width = 10;
// console.log(rect1.width);
// console.log(rect1.height);
// console.log(rect1.area());























