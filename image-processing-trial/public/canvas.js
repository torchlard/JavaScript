'use-strict';

let baseImage, base_ref, base_layer;

const stage = new Konva.Stage({
  container: 'container',
  width: 500,
  height: 500
});

const buildCropLayer = () => {
}

document.getElementById("save").onclick = () => {
  let json = stage.toJSON()
  console.log(json);
}

document.getElementById("resize").onclick = () => {
  base_ref.resize();
  stage.add(base_ref.anchorLayer);
}

document.getElementById("crop").onclick = () => {
  // buildCropLayer();
}

document.getElementById("stop").onclick = () => {
  
  base_ref.baseImage.setDraggable(false);
  base_ref.anchorLayer.destroy();
}

// ==== main ====

const imageObj = new Image();
imageObj.src = './big_flowers.jpg';
let image_obj = new Konva.Image({
  x: 50,
  y: 50,
  image: imageObj,
  width: 300,
  height: 300,
  draggable: false,
});

imageObj.onload = () => {
  base_ref = new Base_Shape(image_obj);
  base_layer = base_ref.buildPicture();
  stage.add(base_layer);
}

