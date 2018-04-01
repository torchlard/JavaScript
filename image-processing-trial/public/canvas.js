'use-strict';

let Base_ref, Crop_ref, Shadow_layer, Text_ref=[];

const STAGE = new Konva.Stage({
  container: 'container',
  width: 700,
  height: 500
});

const imageTemplate = imageObj => new Konva.Image({
  x: 10,
  y: 10,
  image: imageObj,
  // width: 200,
  // height: 200,
  draggable: false,
  id: 'img'
});

// load picture from url to node
const loadPicToStage = src => {
  let imageObj = new Image();
  imageObj.src = src;

  imageObj.onload = () => {
    Base_ref = new Base_Shape(imageTemplate(imageObj), STAGE);
  }
}

document.getElementById("resize").onclick = () => {
  Base_ref.resize();
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

  Crop_ref = new Base_Shape(crop, STAGE);

  // register listener to resize handler
  Crop_ref.resize();

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

  Crop_ref.anchorGroup.on('dragmove', () => {
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
  Base_ref.group.setDraggable(false);
  Base_ref.anchorGroup.destroy();
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
const changeNoise = (value) => Base_ref.noise(value);
const changePixelate = (value) => Base_ref.pixelate(value);
const changePosterize = (value) => Base_ref.posterize(value);
const changeAlpha = (value) => Base_ref.alpha(value);

document.getElementById("grey").onclick = () => Base_ref.turnGreyScale();
document.getElementById("color").onclick = () => Base_ref.turnColorScale();
document.getElementById("invert").onclick = () => Base_ref.invert();
document.getElementById("mask").onclick = () => Base_ref.turnMaskScale();
document.getElementById("sepia").onclick = () => Base_ref.turnSepia();
document.getElementById("solarize").onclick = () => Base_ref.turnSolarize();
document.getElementById("init-paint").onclick = () => {
  let paint_obj = new Paint(Base_ref, STAGE);
  Base_ref.appendCanvas(paint_obj);
}
document.getElementById("clear-paint").onclick = () => Base_ref.clearPaint(1);
document.getElementById("stop-paint").onclick = () => Base_ref.stopPaint(Base_ref);

document.getElementById("input_text").onclick = () => {
  Text_ref.push(new CustomText(STAGE));
}

// add picture
const handleFiles = (files) => {
  console.log(files);
  for(file of files){
    // let img = document.createElement("img");
    let src = window.URL.createObjectURL(file);
    // console.log(src);
    // loadPicToStage(src);
    let imageObj = new Image();
    imageObj.src = src;
    Base_ref = new Konva.Image()
    // imageObj.onload = () => {
    // }
  }
}




// ==== MAIN ====

loadPicToStage('./img/big_flowers.jpg');

$("#colorpicker").farbtastic("#show-color");

