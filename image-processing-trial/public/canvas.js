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
  // console.log(Base_ref.baseImage.getWidth(), Base_ref.baseImage.getHeight())
}

document.getElementById("crop").onclick = () => {
  let baseImage = Base_ref.baseImage;
  // Shadow_layer = Base_ref.duplicateLayer();
  Shadow_layer = Base_ref.layer.clone();

  STAGE.add(Shadow_layer);
  Base_ref.brightness(-0.45);

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
  // console.log(crop_base.getWidth(),crop_base.getHeight(),crop_base.getX(),crop_base.getY());

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
    Base_ref.brightness();
  }
  if (Shadow_layer){
    Shadow_layer.destroy()
  }
  Base_ref.baseImage.setDraggable(false);
  Base_ref.anchorLayer.destroy();
  Base_ref.layer.draw()
}

document.getElementById("save").onclick = () => {
  // let json = STAGE.toJSON()
  // console.log(json);

  let coor = [Crop_ref.baseImage.getX(), Crop_ref.baseImage.getY()]
  let size = [Crop_ref.baseImage.getWidth(), Crop_ref.baseImage.getHeight()]
  // let coor = [50,50]
  // let size = [460,345]
  // console.log('crop',coor, size)
  console.log(Base_ref.baseImage.getX(),Base_ref.baseImage.getY(),Base_ref.baseImage.getWidth(),Base_ref.baseImage.getHeight() );

  Base_ref.cropPicture(coor, size);

  stop();
}


document.getElementById("stop").onclick = () => {
  stop()
}

const changeRotation = (value) => Base_ref.rotate(value);
const changeBrightness = (value) => Base_ref.brightness(value);
const changeContrast = (value) => Base_ref.contrast(value);
const changeBlur = (value) => Base_ref.blur(value);

const changeHue = (value) => Base_ref.hue(value);
const changeSaturation = (value) => Base_ref.saturation(value);
const changeLightness = (value) => Base_ref.lightness(value);

const changeMask = (value) => Base_ref.mask(value);

document.getElementById("grey").onclick = () => Base_ref.turnGreyScale()
document.getElementById("color").onclick = () => Base_ref.turnColorScale()
document.getElementById("invert").onclick = () => Base_ref.invert()
document.getElementById("mask").onclick = () => Base_ref.turnMaskScale()





// ==== MAIN ====

let imageObj = new Image();
imageObj.src = './big_flowers.jpg';
let image_obj = new Konva.Image({
  x: 10,
  y: 10,
  image: imageObj,
  // width: 200,
  // height: 200,
  draggable: false,
  id: 'img'
});

imageObj.onload = () => {
  Base_ref = new Base_Shape(image_obj);
  let base_layer = Base_ref.buildPicture();
  STAGE.add(base_layer);
}

