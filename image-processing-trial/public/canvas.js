'use-strict';

let base_ref, crop_ref, shadow_ref;

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
  let anchor = base_ref.resize();
  stage.add(anchor);
}

document.getElementById("crop").onclick = () => {
  let baseImage = base_ref.baseImage;
  let shadowLayer = base_ref.duplicateLayer();
  shadowLayer.setClip({
    x: 80,
    y: 80,
    width: 20,
    height: 20
  });
  shadowLayer.setClip({
    x: 160,
    y: 160,
    width: 20,
    height: 20
  });
  
  stage.add(shadowLayer);
  
  base_ref.darken(true);
  
  let crop = new Konva.Rect({
    x: baseImage.getX(),
    y: baseImage.getY(),
    fill: 'rgba(255, 255, 255, 0.3)',
    width: baseImage.getWidth(),
    height: baseImage.getHeight(),
    draggable: true
  });
  
  crop_ref = new Base_Shape(crop);
  
  // crop_ref.darken(false);
  stage.add(crop_ref.buildPicture());
  stage.add(crop_ref.resize());
  
  crop_ref.anchorLayer.on('dragmove', () => {
    
    
  })
}

document.getElementById("stop").onclick = () => {
  if(crop_ref){
    crop_ref.destroyAll();
    base_ref.darken(false);
  }
  base_ref.baseImage.setDraggable(false);
  base_ref.anchorLayer.destroy();
}

// ==== main ====

let imageObj = new Image();
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
  let base_layer = base_ref.buildPicture();
  stage.add(base_layer);
}

