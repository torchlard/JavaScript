'use strict'

// allow max, min on array by array.max(), array.min()
Array.prototype.max = function(){
  return Math.max.apply(null, this);
}
Array.prototype.min = function(){
  return Math.min.apply(null, this);
}


class Base_Shape {

  constructor(targetImage, stage){
    this.baseImage = targetImage;
    this.turnColorScale();
    this.layer = new Konva.Layer();
    this.anchorGroup = new Konva.Group();
    this.group = new Konva.Group();
    this.stage = stage;
    // this.img_draw = null;

    let base_layer = this.buildPicture();
    this.stage.add(base_layer)
  }

  buildPicture() {
    // this.baseImage.shadowColor('green');

    this.group.add(this.baseImage);
    this.layer.add(this.group);

    // this.baseImage.on('dragmove', () => {
    //   let points = this.anchorGroup.find('.anchor');
    //   let width = this.baseImage.getWidth(), height = this.baseImage.getHeight();
    //   let x = this.baseImage.getX(), y = this.baseImage.getY();
    //
    //   points[0].setX(x-7); points[0].setY(y-7);
    //   points[1].setX(x-7+width); points[1].setY(y-7);
    //   points[2].setX(x-7); points[2].setY(y-7+height);
    //   points[3].setX(x-7+width); points[3].setY(y-7+height);
    //   this.anchorGroup.draw();
    // });

    return this.layer;
  }

  // build all anchor
  resize() {
    let x = this.baseImage.getX(), y = this.baseImage.getY();
    let width = this.baseImage.getWidth(), height = this.baseImage.getHeight();
    let coor = [x,y, x+width,y, x,y+height, x+width,y+height];
    for (let i=0; i<coor.length; i+=2){
      this.buildAnchor(coor[i], coor[i+1], i/2);
    }
    this.group.setDraggable(true);
    this.group.add(this.anchorGroup);
    this.layer.draw()

    // console.log(this.layer);
  }

  updatePicture(coor){
    this.baseImage.cache();

    this.baseImage.setX(coor[0]);
    this.baseImage.setY(coor[1]);
    this.baseImage.setWidth(coor[2]);
    this.baseImage.setHeight(coor[3]);

    // console.log(this.baseImage);

    this.group.draw()
    // this.baseImage.draw()
  }

  cropPicture(coor, size){
    this.baseImage.crop({
      x: coor[0],
      y: coor[1],
      width: size[0],
      height: size[1]
    });
    // this.baseImage.cropWidth(size[0]);
    // this.baseImage.cropHeight(size[1]);

    this.baseImage.setWidth(size[0]);
    this.baseImage.setHeight(size[1]);
    this.baseImage.setX(coor[0]);
    this.baseImage.setY(coor[1]);

    this.baseImage.draw();
  }



  updateAnchor(i){
    // let point = this.anchorGroup.find(`#${i}`)[0];
    let point = this.anchorGroup.find('.anchor');
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

  // build each anchor
  buildAnchor(x,y, i){

    let square = new Konva.Rect({
      x: x-7,
      y: y-7,
      width: 14,
      height: 14,
      fill: 'rgb(139, 139, 139)',
      stroke: 'black',
      strokeWidth: 1,
      draggable: true,
      id: i,
      name: 'anchor'
    });

    square.on ('mouseover', () => {
      square.fill('rgb(226,226,226)');
      this.anchorGroup.draw();
    });
    square.on('mouseout', () => {
      square.fill('rgb(139,139,139)');
      this.anchorGroup.draw();
    });

    square.on('dragmove', () => {
      let coor = this.updateAnchor(i);
      this.updatePicture(coor);
    });

    this.anchorGroup.add(square);
  }

  destroyAll(){
    this.layer.destroy();
    this.anchorGroup.destroy();
  }

  rotate(theta){
    this.baseImage.rotation(theta)
    this.layer.draw()
  }

  clearPaint(flag){
    let canvas = this.group.find(".canvas");
    if(canvas) canvas.destroy();
    if(flag){
      let img_draw = this.group.find(".img-draw");
      img_draw.destroy();
      this.img_draw = undefined;
    }

    this.layer.draw();
  }

  appendCanvas(ref){
    this.canvas_img = ref
  }

  stopPaint(ref){
    this.canvas_img.stopPaint(ref);
  }

  // add free hand drawing to group
  appendDrawing(src){
    this.clearPaint();

    const imageObj = new Image();
    imageObj.src = src;
    this.img_draw = src;

    imageObj.onload = () => {
      const img = new Konva.Image({
        x: this.baseImage.getX(),
        y: this.baseImage.getY(),
        image: imageObj,
        draggable: false,
        name: 'img-draw'
      });
      this.group.add(img);
      this.layer.draw();
    }

  }

  addImg(img){
    this.group.add(img);
    img.draw()
  }


// ========= colors =========

  brightness(bright=0){
    this.baseImage.brightness(bright);
    this.layer.draw();
  }
  contrast(val=0){
    this.baseImage.contrast(val);
    this.layer.draw();
  }

  blur(val=0){
    this.baseImage.blurRadius(val);
    this.layer.draw();
  }

  hue(val){
    this.baseImage.hue(val);
    this.layer.draw();
  }
  saturation(val){
    this.baseImage.saturation(val);
    this.layer.draw();
  }
  lightness(val){
    this.baseImage.luminance(val);
    this.layer.draw();
  }

  turnGreyScale(){
    this.baseImage.cache();
    this.baseImage.filters([Konva.Filters.Grayscale, Konva.Filters.Blur, Konva.Filters.Brighten, Konva.Filters.Contrast]);
    this.layer.draw()
  }

  turnColorScale(){
    // cache will affect scaling
    this.baseImage.cache();
    this.baseImage.filters([Konva.Filters.Brighten, Konva.Filters.Contrast, Konva.Filters.Blur, Konva.Filters.HSL, Konva.Filters.Noise, Konva.Filters.Pixelate, Konva.Filters.Posterize]);
    this.baseImage.noise(0);
    this.baseImage.pixelSize(0.001);
    this.baseImage.levels(1);
    if (this.layer) {
      this.layer.draw();
    }
  }

  invert(){
    this.baseImage.cache();
    this.baseImage.filters([Konva.Filters.Brighten, Konva.Filters.Contrast, Konva.Filters.Blur, Konva.Filters.HSL, Konva.Filters.Invert]);
    this.layer.draw()
  }

  turnMaskScale(){
    this.baseImage.cache();
    this.baseImage.filters([Konva.Filters.Mask, Konva.Filters.Brighten, Konva.Filters.Contrast, Konva.Filters.Blur, Konva.Filters.Threshold]);
    this.mask(0.5);
  }

  mask(value){
    this.baseImage.threshold(value);
    this.layer.draw();
  }

  noise(val){
    this.baseImage.noise(val);
    this.layer.draw();
  }

  pixelate(val){
    this.baseImage.pixelSize(val);
    this.layer.draw();
  }
  posterize(val){
    this.baseImage.levels(val);
    this.layer.draw();
  }

  alpha(val){
    this.baseImage.setOpacity(val);
    this.layer.draw();
  }

  turnSepia(){
    this.baseImage.cache();
    this.baseImage.filters([Konva.Filters.Sepia]);
    this.layer.draw()
  }
  turnSolarize(){
    this.baseImage.cache();
    this.baseImage.filters([Konva.Filters.Solarize]);
    this.layer.draw()
  }

}






