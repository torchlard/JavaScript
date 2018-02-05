// ## class Complex
// function Complex(real,imaginary){
//   this.x = real;
//   this.y = imaginary;
// }
// 
// Complex.prototype.magnitude = function(){
//   return Math.sqrt(this.x*this.x + this.y*this.y);
// };
// Complex.prototype.negative = function(){
//   return new Complex(-this.x, -this.y);
// };
// Complex.prototype.add = function(a){
//   return new Complex(a.x+this.x, a.y+this.y);
// };
// Complex.prototype.toString = function(){
//   return "("+ this.x+","+ this.y +")";
// };
// Complex.prototype.valueOf = function(){ return this.x };
// Complex.prototype.equals = function(that){ return this.x==that.x && this.y==that.y;};
// Complex.ZERO = new Complex(0,0);
// 
// var num1 = new Complex(3,5);
// console.log(num1.toString());
// var num2 = num1.add(new Complex(4,6));
// console.log(num2.toString());
// console.log(num1==num2);
// var d = num1+num2;
// console.log(d);

// function ImmutableRectangle(w,h){
//   this.getWidth = function(){ return w; }
//   this.getHeight = function(){ return h; }
// 
// }
// ImmutableRectangle.prototype.area = function(){
//   return this.getWidth()*this.getHeight();
// };
// var rect1 = new ImmutableRectangle(2,3);
// console.log(rect1.area());

function Rectangle(w,h){
  this.width = w;
  this.height = h;
  this.diff = function(){return this.width-this.height;};
}
// cannot be inherited
Rectangle.prototype.area = function(){return this.width*this.height; }
Rectangle.prototype.toString = function(){ return "width="+this.width+", height="+this.height; }
// subclass 1
PointedRectangle.prototype.superclass = Rectangle;
function PointedRectangle(x,y,w,h){
  // Rectangle.call(this,w,h);
  this.superclass(w,h);
  this.x = x;
  this.y = y;
}
PointedRectangle.prototype.toString = function(){ 
  return "x="+this.x+", y="+this.y +"; "+this.superclass.prototype.toString.apply(this); 
}
// subclass 2
// PointedRectangle.prototype = new Rectangle();
// delete PointedRectangle.prototype.width;
// delete PointedRectangle.prototype.height;
// PointedRectangle.prototype.constructor = PointedRectangle;
// PointedRectangle.prototype.contains = function(x,y){
//   return (x>this.x && x<this.x+this.width &&
//       y>this.y && y<this.y+this.height);
// };

var rect1 = new Rectangle(2,3);
var rect2 = new PointedRectangle(5,6,2,4);
console.log(rect1.toString());
console.log(rect2.toString());










