class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
    getX(){
      return this.x
    }
    newX(){
      this.yea = new Point(1,2);
      this.yea.addX();
      return this.yea
    }
    addX(){
      this.x +=10;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
      let str1 = super.getX();
      return super.toString() + ' in ' + this.color+' '+this.y;
    }
    yea(){
      return super.newX().toString()
    }
}

let cp = new ColorPoint(25, 8, 'green');
cp.toString(); // '(25, 8) in green'

console.log(cp.toString()); // true
console.log(cp.yea());

// const stage = new Konva.Stage({
//   container: 'container',
//   width: 700,
//   height: 500
// });
// let layer = new Konva.Layer()
// let sq1 = new Konva.Rect({
//       x: 70,
//       y: 70,
//       width: 140,
//       height: 140,
//       fill: 'rgb(139, 139, 139)',
//       stroke: 'black',
//       strokeWidth: 1,
//       draggable: true,
//       name: 'sq1'
// });
// let sq2 = new Konva.Rect({
//       x: 70,
//       y: 280,
//       width: 140,
//       height: 140,
//       fill: 'rgb(139, 139, 139)',
//       stroke: 'black',
//       strokeWidth: 1,
//       draggable: true,
//       name: 'sq2'
// });
// let back = new Konva.Rect({
//   x: 0,
//   y: 0,
//   width: 700,
//   height:500,
//   fill: 'rgba(0,0,0,0)',
//   draggable: false
// });
//
// layer.add(back, sq1, sq2);
// stage.add(layer);
// stage.draw();
//
// let mark=0;
// // square.on('click', ()=>{
// //   // console.log('sq');
// //   let self = this;
// //   stage.find('.anchor').each(d => {
// //     if (d !== square){
// //       console.log('d,this');
// //       d.fill('rgb(139,139,139)');
// //     }
// //   });
// //   square.fill('rgb(255, 0, 0)');
// //   stage.draw()
// // });
// // sq2.on('click', ()=>{
// //   // console.log('sq2');
// //   stage.find('.anchor').each(d => d.fill('rgb(139,139,139)'));
// //   sq2.fill("rgb(255, 0, 0)");
// //   stage.draw()
// // });
// // back.on('click', () => {
// //   console.log('back');
// //   square.fill("rgb(139,139,139)");
// //   sq2.fill("rgb(139,139,139)");
// //   stage.draw()
// // });
//
// stage.on('click', (evt) => {
//   let name = evt.target;
//   // console.log(name, sq1);
//   if(name == sq1){
//     sq1.fill('rgb(255, 0, 0)');
//   } else {
//     sq1.fill('rgb(139,139,139)');
//   }
//   stage.draw()
// })
//
// stage.on('click', (evt) => {
//   let name = evt.target;
//   if(name == sq2){
//     // console.log(name);
//     sq2.fill('rgb(255, 0, 0)');
//   } else {
//     sq2.fill('rgb(139,139,139)');
//   }
//   stage.draw()
// })

