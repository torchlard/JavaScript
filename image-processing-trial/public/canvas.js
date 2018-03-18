'use-strict';

// allow max, min on array by array.max(), array.min()
Array.prototype.max = function(){
  return Math.max.apply(null, this);
}
Array.prototype.min = function(){
  return Math.min.apply(null, this);
}

let baseImage;
const stage = new Konva.Stage({
  container: 'container',
  width: 500,
  height: 500
});

const layer = new Konva.Layer()
const anchorLayer = new Konva.Layer()

const buildAnchor = (x,y, i) => {
  // let context = anchorLayer.getContext();
  // context.clear();
  
  let square = new Konva.Rect({
    x: x-7,
    y: y-7,
    width: 15,
    height: 15,
    fill: 'rgb(139, 139, 139)',
    stroke: 'black',
    strokeWidth: 1,
    draggable: true,
    id: i,
    name: 'anchor'
  });
  
  square.on ('mouseover', () => {
    // console.log('over');
    square.fill('rgb(226,226,226)');
    anchorLayer.draw();
  });
  square.on('mouseout', () => {
    // console.log('out');
    square.fill('rgb(139,139,139)');
    anchorLayer.draw();
  });
  
  square.on('dragmove', () => {
    let coor = updateAnchor(i);
    updatePicture(coor);
  });
  
  anchorLayer.add(square);
}

const imageObj = new Image();
imageObj.src = './big_flowers.jpg';

const updateAnchor = (i) => {
  // let point = stage.find(`#${i}`)[0];
  let point = stage.find('.anchor');
  let x = point[i].getX(), y = point[i].getY();
  // console.log(x,y)
  switch(i){
    case 0:
      point[1].setY(y);
      point[2].setX(x);
      break;
    case 1:
      point[0].setY(y);
      point[3].setX(x);
      break;
    case 2:
      point[3].setY(y);
      point[0].setX(x);
      break;
    case 3:
      point[2].setY(y);
      point[1].setX(x);
      break;
  }

  let x_list = [], y_list = [];
  point.each((shape) => {
    x_list.push(shape.getX());
    y_list.push(shape.getY()); 
  });
  return [x_list.min()+7, y_list.min()+7, Math.abs(point[0].getX()-point[1].getX()), Math.abs(point[1].getY()-point[3].getY()) ];
}


const buildPicture = () => {

  baseImage = new Konva.Image({
    x: 50,
    y: 50,
    image: imageObj,
    width: 300,
    height: 300,
    draggable: false,
  });
  // baseImage.shadowColor('green');
  
  baseImage.on('dragmove', () => {
    let points = stage.find('.anchor');
    let width = baseImage.getWidth(), height = baseImage.getHeight();
    let x = baseImage.getX(), y = baseImage.getY();

    points[0].setX(x-7); points[0].setY(y-7);
    points[1].setX(x-7+width); points[1].setY(y-7);
    points[2].setX(x-7); points[2].setY(y-7+height);
    points[3].setX(x-7+width); points[3].setY(y-7+height);
    anchorLayer.draw();
  })
} 

const updatePicture = (coor) => {
  baseImage.setX(coor[0]);
  baseImage.setY(coor[1]);
  baseImage.setWidth(coor[2]);
  baseImage.setHeight(coor[3]);
  layer.draw()
}

const buildCropLayer = () => {
  
}

imageObj.onload = () => {
  buildPicture();
  layer.add(baseImage)
  stage.add(layer);
}


document.getElementById("save").onclick = () => {
  let json = stage.toJSON()
  console.log(json);
}

document.getElementById("resize").onclick = () => {
  let x = baseImage.getX(), y = baseImage.getY();
  let width = baseImage.getWidth(), height = baseImage.getHeight();
  let coor = [x,y, x+width,y, x,y+height, x+width,y+height];
  for(let i=0; i<coor.length; i+=2){
    buildAnchor(coor[i], coor[i+1], i/2);
  }
  baseImage.setDraggable(true);

  stage.add(anchorLayer);
}

document.getElementById("crop").onclick = () => {
  buildCropLayer();
}

document.getElementById("stop").onclick = () => {
  // let context = anchorLayer.getContext();
  // context.clear()
  baseImage.setDraggable(false);
  anchorLayer.destroy()
}


