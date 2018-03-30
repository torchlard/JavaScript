'use-strict';

let Base_ref, Crop_ref, Shadow_layer;

const STAGE = new Konva.Stage({
  container: 'container',
  width: 500,
  height: 500
});


document.getElementById("resize").onclick = () => {
  let anchor = Base_ref.resize();
  STAGE.add(anchor);
}

document.getElementById("crop").onclick = () => {
  let baseImage = Base_ref.baseImage;
  Shadow_layer = Base_ref.duplicateLayer();
  
  STAGE.add(Shadow_layer);
  Base_ref.darken(true);
  
  let crop = new Konva.Rect({
    x: baseImage.getX(),
    y: baseImage.getY(),
    fill: 'rgba(255, 255, 255, 0.0)',
    width: baseImage.getWidth(),
    height: baseImage.getHeight(),
    draggable: true,
    dragBoundFunc: function(pos){
      let x=pos.x, y=pos.y;
      let boundX=baseImage.getX(), boundY=baseImage.getY();
      let height=baseImage.getHeight(), width=baseImage.getWidth();
      let myH = this.getHeight(), myW = this.getWidth();
      if (x < boundX) x = boundX;
      if (y < boundY) y = boundY;
      // console.log(height, width)
      if (x+myW > width+boundX ) x = boundX+(width-myW);
      if (y+myH > height+boundY ) y = boundY+(height-myH);
      return {
        x: x, y: y
      }
    }
  });
  
  Crop_ref = new Base_Shape(crop);
  
  // register listener to resize handler
  STAGE.add(Crop_ref.buildPicture());
  STAGE.add(Crop_ref.resize());
  
  let crop_base = Crop_ref.baseImage;
  // let shadow_img = Shadow_layer.find('.img');
  const shadowResize = () => {
    Shadow_layer.setClip({
      x: crop_base.getX(),
      y: crop_base.getY(),
      width: crop_base.getWidth(),
      height: crop_base.getHeight()
    });
    Shadow_layer.draw();
  }
  
  Crop_ref.anchorLayer.on('dragmove', () => {
    shadowResize()
  });
  Crop_ref.layer.on('dragmove', () => {
    shadowResize()
  });
  
}


const stop = () => {
  if (Crop_ref){
    Crop_ref.destroyAll();
    Base_ref.darken(false);
  }
  if (Shadow_layer){
    Shadow_layer.destroy()
  }
  Base_ref.baseImage.setDraggable(false);
  Base_ref.anchorLayer.destroy();
}

document.getElementById("save").onclick = () => {
  // let json = STAGE.toJSON()
  // console.log(json);
  let coor = [Crop_ref.baseImage.getX(), Crop_ref.baseImage.getY()]
  let size = [Crop_ref.baseImage.getWidth(), Crop_ref.baseImage.getHeight()]
  // console.log(coor, size)
  Base_ref.cropPicture(coor, size);
  
  stop();
}


document.getElementById("stop").onclick = () => {
  stop()
}

// ==== MAIN ====

let imageObj = new Image();
imageObj.src = './big_flowers.jpg';
let image_obj = new Konva.Image({
  x: 50,
  y: 50,
  image: imageObj,
  width: 300,
  height: 300,
  draggable: false,
  id: 'img'
});

imageObj.onload = () => {
  Base_ref = new Base_Shape(image_obj);
  let base_layer = Base_ref.buildPicture();
  STAGE.add(base_layer);
}

