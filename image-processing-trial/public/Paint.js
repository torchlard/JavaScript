'use strict';

class Paint {
  constructor(ref, stage){
    this.canvas = document.createElement('canvas');
    this.canvas.width = ref.baseImage.getWidth();
    this.canvas.height = ref.baseImage.getHeight();
    this.stage = stage;

    this.layer = ref.layer;
    this.image = this.buildCanvas(ref);
    this.initBrush();
  }

  buildCanvas(ref){
    const image = new Konva.Image({
      image: this.canvas,
      x : ref.baseImage.getX(),
      y : ref.baseImage.getY(),
      stroke: 'green',
      shadowBlur: 5,
      name: 'canvas'
    });
    ref.group.add(image);
    this.layer.draw();

    return image;
  }

  initBrush(){
    let context = this.canvas.getContext('2d');
    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    let isPaint = false;
    let lastPointerPosition;
    let mode = 'brush';

    this.stage.on('contentMousedown.proto', () => {
      isPaint = true;
      lastPointerPosition = this.stage.getPointerPosition();
    });

    this.stage.on('contentMouseup.proto', () => isPaint = false );

    this.stage.on('contentMousemove.proto', () => {
      if (!isPaint) {
        return;
      }

      if (mode === 'brush') {
        context.globalCompositeOperation = 'source-over';
      } else if (mode === 'eraser') {
        context.globalCompositeOperation = 'destination-out';
      }

      context.beginPath();
      let localPos = {
        x: lastPointerPosition.x - this.image.x(),
        y: lastPointerPosition.y - this.image.y()
      };
      context.moveTo(localPos.x, localPos.y);

      let pos = this.stage.getPointerPosition();
      localPos = {
        x: pos.x - this.image.x(),
        y: pos.y - this.image.y()
      };
      context.lineTo(localPos.x, localPos.y);
      context.closePath();
      context.stroke();

      lastPointerPosition = pos;
      this.layer.draw();
    });

    let select = document.getElementById('paint-tool');
    select.addEventListener('change', function() {
      mode = select.value;
    });
  }

  stopPaint(ref){
    this.stage.off('contentMouseup.proto');
    this.stage.off('contentMousemove.proto');
    this.stage.off('contentMousedown.proto');

    let image = this.canvas.toDataURL('image/png').replace(/^data:image\/\w+;base64,/, '');

    $.ajax({
      type: 'post',
      url: 'http://localhost:8001',
      data: {image},
      crossDomain: true,
      success: (data, txt, jqxhr) => {
        console.log('sent to server', data);
        ref.appendDrawing('./img/test.png')
      }
    }).fail((xhr, status, error) => {
      console.error(error);
    });

  }

}




