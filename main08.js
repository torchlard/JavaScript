'use strict'

let n =1;

// build a few layers
// var Westeros = Westeros || {};
// Westeros.Structure = Westeros.Structure || {};
// Westeros.Structure.Castle = function(name){ this.name = name };
// Westeros.Structure.Castle.prototype.Build = function(){ console.log("Castle built: " + this.name)};


// another way
// var Westeros = Westeros || {};
// Westeros.Structures = Westeros.Structures || {};
// var Castle = (function(){
//   function Castle(name){
//     this.name = name;
//   }
//   Castle.prototype.Build = function(){
//     console.log("Castle built: "+ this.name);
//   };
//   return Castle;
// })();
// Westeros.Structures.Castle = Castle;

// test
// var winterfell = new Westeros.Structures.Castle("winterfell");
// winterfell.Build()

// var Structures = Structures || {};
// var BaseStructure = (function(){
//   function BaseStructure(){
//   }
//   return BaseStructure;
// })();
// 
// Structures.BaseStructure = BaseStructure;
// 
// // d = derived class, b = super class
// var __extends = this.__extends || function(d,b){
//   for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
//   function __() { this.constructor = d; }
//   __.prototype = b.prototype;
//   d.prototype = new __();
// };
// 
// // constructor of Castle ?
// var Castle = (function (_super){
//   __extends(Castle, _super);
//   function Castle(name){
//     this.name = name;
//     _super.call(this);
//   }
//   Castle.prototype.Build = function(){
//     console.log("Castle build: " + this.name);
//   };
//   return Castle;
// })(BaseStructure);


// // closure way construct class
// let Westeros;
// (function(Westeros){
//   (function(Structures){
//     let Castle = (function(){
//       function Castle(name){
//         this.name = name;
//       }
//       Castle.prototype.Build = function(){
//         console.log('castle built: '+this.name);
//         let w = new Wall();
//       };
//       return Castle;
//     })();
// 
//     Structures.Castle = Castle;
//     let Wall = (function(){
//       function Wall(){
//         console.log('wall constructed')
//       }
//       return Wall;
//     })();
//     Structures.Wall = Wall;
//   })(Westeros.Structures || (Westeros.Structures = {}));
//   let Structures = Westeros.Structures;
// })(Westeros || (Westeros = {}) );
// 
// // test
// let person = new Westeros.Structures.Castle('google');
// let walls = new Westeros.Structures.Wall();
// person.Build()

// // private function
// const privateMethod = {
//   priv(){
//     console.log(`say ${this.say}`)
//   }
// }
// class Service {
//   constructor(){
//     this.say = 'hello'
//   }
//   publicMethod(){
//     privateMethod.priv.call(this)
//   }
// }

// var Service = (function(){
//   var black = function(){
//     this.say = 'hello'
//   }
//   var priv = function(){
//     console.log('say '+this.say)
//   }
//   black.prototype.publicMethod = function(){
//     priv.call(this)
//   }
//   return black;
// })();
// 
// let aa = new Service()
// aa.publicMethod()


// var Person = (function(){
//   function Person(name='john'){
//     this.getName = function(){
//       return name;
//     };
//   }
//   return Person;
// }());

// var Person = (function(){
//   var nameSymbol = Symbol('name')
//   function Person(name){
//     this[nameSymbol] = name
//   }
//   Person.prototype.getName = function(){
//     return this[nameSymbol]
//   };
// 
//   return Person;
// }());
// 
// var p = new Person('john');
// // p.name = 'peter'
// console.log(p.getName())
// console.log(p)


// ES5
// var Circle = (function(){
//   var circle = function(radius){
//     this.radius = radius || 1.0;
//     this.color = 'red';
//   }
//   circle.prototype.getRadius = function(){
//     return this.radius;
//   }
//   circle.prototype.getArea = function(){
//     return Math.PI*Math.pow(this.radius, 2)
//   }
// 
//   return circle;
// })();

// ES6
class Circle {
  constructor(radius=1.0){
    this.radius = radius;
    this.color = 'red';
  }
  getRadius(){
    return this.radius
  }
  getArea(){
    return Math.PI*Math.pow(this.radius, 2)
  }
}

var circle1 = new Circle(2.0);
console.log(circle1.getRadius())
console.log(circle1.getArea())






















