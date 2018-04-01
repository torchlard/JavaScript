'use strict';

class CustomText {
  constructor(stage){
    this.layer = new Konva.Layer();
    this.stage = stage;
    this.initText();
  }

  initText(){
    const textTemplate = new Konva.Text({
      x: 15,
      y: 15,
      text: 'sample text',
      fontSize: 25,
      fontFamily: 'Calibri',
      fill: 'green'
    });

    this.layer.add(textTemplate)
    this.stage.add(this.layer);
    this.layer.draw();
  }

  editText(){

  }

}














