'use-strict';

// allow max, min on array by array.max(), array.min()
Array.prototype.max = function(){
  return Math.max.apply(null, this);
}
Array.prototype.min = function(){
  return Math.min.apply(null, this);
}

// build anchor
const moveover = obj => {
  obj.on('mouseover', () => obj.fill('rgb(226,226,226)')  )
}
const mouseout = obj => {
  obj.on('mouseout', () => obj.fill('rgb(139,139,139)') )
}
// const dragmove = obj => {
//   obj.on('dragmove', () => ['pos', obj.currentPos()])
// }
const buildAnchor = (x,y,i, obj) => {
  obj.moveover();
  obj.mouseout();
  obj.dragmove();
}

const updateCalc = (i, x, y) => {
  if (i==0){
    return [[3,y],[4,x]]
  } else if(i==1){
    return [[1,y], [6,x]]
  } else if(i==2) {
    return [[7,y], [0,x]]
  } else if (i==3) {
    return [[5,y], [2,x]]
  }
}

const findPosSize = (x_list, y_list, point) => {
  return [x_list.min()+7, y_list.min()+7, Math.abs(point[0].getX()-point[1].getX()), Math.abs(point[1].getY()-point[3].getY()) ];
}

const setPosSize = (obj, coor) => {
  obj.setX(coor[0]);
  obj.setY(coor[1]);
  obj.setWidth(coor[2]);
  obj.setHeight(coor[3]);
}


// ========= MAIN =========
// build element
const stage = new Konva.Stage({
  container: 'container',
  width: 500,
  height: 500
});

const layer = new Konva.Layer()
const anchorLayer = new Konva.Layer()

const resize_sq = new Konva.Rect({
  x: x-7,
  y: y-7,
  width: 15,
  height: 15,
  fill: 'rgb(139, 139, 139)',
  stroke: 'black',
  strokeWidth: 1,
  draggable: true,
  name: 'anchor'
  // id: i,
});

baseImage = imageObj => new Konva.Image({
  x: 50,
  y: 50,
  image: imageObj,
  width: 300,
  height: 300,
  draggable: false,
});

const imageObj = new Image();
imageObj.src = './big_flowers.jpg';














