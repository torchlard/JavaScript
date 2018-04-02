'use-strict';

let Base_ref, Crop_ref, Shadow_layer, Text_ref;

const STAGE = new Konva.Stage({
  container: 'container',
  width: 700,
  height: 500
});

// const imageTemplate = imageObj => new Konva.Image({
//   x: 10,
//   y: 10,
//   image: imageObj,
//   // width: 200,
//   // height: 200,
//   draggable: false,
//   id: 'img'
// });

// load picture from url to node
// const loadPicToStage = src => {
//   let imageObj = new Image();
//   imageObj.src = src;
//
//   imageObj.onload = () => {
//     Base_ref = new Base_Shape(imageTemplate(imageObj), STAGE);
//   }
// }

Base_ref = new Base_Shape(imageTemplate(imageObj), STAGE);


crop_btn.onclick = () => {


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

saveCrop_btn.onclick = () => {
  let coor = [Crop_ref.baseImage.getX(), Crop_ref.baseImage.getY()]
  let size = [Crop_ref.baseImage.getWidth(), Crop_ref.baseImage.getHeight()]
  Base_ref.cropPicture(coor, size);
  stop();
}

const register_image = () => {
  startPaint_btn.onclick = () => new Paint(STAGE);
  clearPaint_btn.onclick = () => image_ref.clearPaint(1);
  savePaint_btn.onclick = () => image_ref.stopPaint();
  inputText_btn.onclick = () => Text_ref = new CustomText(STAGE);
}

// add picture
const addPic_btn = document.getElementById("add-pic-btn");
const handleFiles = (files) => {
  console.log(files);
  for(file of files){
    let src = window.URL.createObjectURL(file);
    let imageObj = new Image();
    imageObj.src = src;
    Base_ref = new Konva.Image()
  }
}
addPic_btn.onclick = (files) => handleFiles(addPic_btn.files);



// ==== MAIN ====

loadPicToStage('./img/big_flowers.jpg');

$("#colorpicker").farbtastic("#show-color");

