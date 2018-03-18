'use-strict'

// allow max, min on array by array.max(), array.min()
Array.prototype.max = function(){
  return Math.max.apply(null, this);
}
Array.prototype.min = function(){
  return Math.min.apply(null, this);
}


class Base_Shape {
  
  constructor(targetImage){
    this.baseImage = targetImage;
    this.layer = new Konva.Layer();
    this.anchorLayer = new Konva.Layer();
    this.x=0, this.y=0, this.width=0, this.height=0;
  }
  
  resize() {
    let x = this.baseImage.getX(), y = this.baseImage.getY();
    let width = this.baseImage.getWidth(), height = this.baseImage.getHeight();
    let coor = [x,y, x+width,y, x,y+height, x+width,y+height];
    for(let i=0; i<coor.length; i+=2){
      this.buildAnchor(coor[i], coor[i+1], i/2);
    }
    this.baseImage.setDraggable(true);
    
    return this.anchorLayer;
  }
  
  updatePicture(coor){
    this.baseImage.setX(coor[0]);
    this.baseImage.setY(coor[1]);
    this.baseImage.setWidth(coor[2]);
    this.baseImage.setHeight(coor[3]);
    this.layer.draw()
  }
  
  cropPicture(coor){
    
  }
  
  buildPicture() {
    // this.baseImage.shadowColor('green');
    this.layer.add(this.baseImage);
    
    this.baseImage.on('dragmove', () => {
      let points = this.anchorLayer.find('.anchor');
      let width = this.baseImage.getWidth(), height = this.baseImage.getHeight();
      let x = this.baseImage.getX(), y = this.baseImage.getY();
      
      points[0].setX(x-7); points[0].setY(y-7);
      points[1].setX(x-7+width); points[1].setY(y-7);
      points[2].setX(x-7); points[2].setY(y-7+height);
      points[3].setX(x-7+width); points[3].setY(y-7+height);
      this.anchorLayer.draw();
    });
    
    return this.layer;
  }

  updateAnchor(i){
    // let point = this.anchorLayer.find(`#${i}`)[0];
    let point = this.anchorLayer.find('.anchor');
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
      this.anchorLayer.draw();
    });
    square.on('mouseout', () => {
      square.fill('rgb(139,139,139)');
      this.anchorLayer.draw();
    });
    
    square.on('dragmove', () => {
      let coor = this.updateAnchor(i);
      this.updatePicture(coor);
    });
    
    this.anchorLayer.add(square);
  }
  
  destroyAll(){
    this.layer.destroy();
    this.anchorLayer.destroy();
  }
  
  darken(bright){
    this.baseImage.cache();
    this.baseImage.filters([Konva.Filters.Brighten]);
    if(bright){
      this.baseImage.brightness(-0.3);
    } else {
      this.baseImage.brightness(0);
    }
    this.layer.draw();
  }
  
  duplicateLayer(){
    this.newLayer = new Konva.Layer();
    this.newLayer.add(this.baseImage.clone());
    
    return this.newLayer;
  }

 
}






