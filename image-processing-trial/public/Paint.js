'use strict';

class Paint {
  constructor(ref, stage){
    this.canvas = document.createElement('canvas');
    this.canvas.width = ref.baseImage.getWidth();
    this.canvas.height = ref.baseImage.getHeight();
    this.canvas_x = ref.baseImage.getX();
    this.canvas_y = ref.baseImage.getY();
    this.stage = stage;

    this.layer = ref.layer;
    this.image = this.buildCanvas(ref);
    this.initBrush(ref);

    // console.log(ref.baseImage);
  }

  buildCanvas(ref){
    const image = new Konva.Image({
      image: this.canvas,
      x : this.canvas_x,
      y : this.canvas_y,
      stroke: 'green',
      shadowBlur: 5,
      name: 'canvas'
    });
    ref.group.add(image);
    this.layer.draw();

    return image;
  }

  initBrush(ref){
    // brush style
    let context = this.canvas.getContext('2d');
    let pen = {"strokeStyle": "#000000", "lineJoin": "round", "lineCap": "butt", "lineWidth": 3};
    let pencil = {"strokeStyle": "#000000", "lineJoin": "bevel", "lineCap": "round", "lineWidth": 2};
    let brush = {"strokeStyle": "#000000", "lineJoin": "round", "lineCap": "round", "lineWidth": 5};


    const pen_width = document.querySelector("#control-btn p input[name='pen_width']");
    const show_color = document.getElementById("show-color");
    const pen_alpha = document.querySelector("input[name='pen-alpha']");

    const change_tool = choice => {
      let drawing_tool;
      switch(choice){
        case 'pen':
        drawing_tool = pen;
        break;
        case 'pencil':
        drawing_tool = pencil;
        break;
        case 'brush':
        drawing_tool = brush;
        break;
        default:
        drawing_tool = brush;
      }

      // context.strokeStyle = drawing_tool.strokeStyle;
      context.strokeStyle = show_color.value;
      context.lineJoin = drawing_tool.lineJoin;
      context.lineWidth = drawing_tool.lineWidth;
      context.lineCap = drawing_tool.lineCap;
      pen_width.value = drawing_tool.lineWidth;
      context.globalAlpha = pen_alpha.value;
    }

    let mode = 'brush';
    let select = document.getElementById('paint-tool');
    select.addEventListener('change', function() {
      mode = select.value;
      change_tool(mode);
    });
    mode = select.value;
    change_tool(mode);
    pen_width.addEventListener('input', () => {
      context.lineWidth = pen_width.value;
    });

    const color_picker = document.getElementById("colorpicker");
    color_picker.addEventListener('mouseup', () => {
      let color = show_color.value;
      context.strokeStyle = color;
      // console.log(color);
    })
    pen_alpha.addEventListener('input', () => context.globalAlpha = pen_alpha.value)


    // init photo
    if(ref.img_draw){
      let img_draw = ref.group.find('.img-draw');
      img_draw.destroy();

      let photo = new Image();
      photo.src = ref.img_draw;
      photo.onload = () => context.drawImage(photo, 0, 0, this.canvas.width, this.canvas.height);
    }

    let isPaint = false;
    let lastPointerPosition = undefined;

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

      // console.log(lastPointerPosition);

      context.beginPath();
      let localPos = {
        x: lastPointerPosition.x - this.canvas_x,
        y: lastPointerPosition.y - this.canvas_y
      };
      context.moveTo(localPos.x, localPos.y);

      let pos = this.stage.getPointerPosition();
      localPos = {
        x: pos.x - this.canvas_x,
        y: pos.y - this.canvas_y
      };
      context.lineTo(localPos.x, localPos.y);
      context.closePath();
      context.stroke();

      lastPointerPosition = pos;
      this.layer.draw();
    });


  }

  stopPaint(ref){
    this.stage.off('contentMouseup.proto');
    this.stage.off('contentMousemove.proto');
    this.stage.off('contentMousedown.proto');

    // let image = this.canvas.toDataURL('image/png').replace(/^data:image\/\w+;base64,/, '');
    let image = this.canvas.toDataURL('image/png');
    // let img2 = new Image();
    // img2.src = image;
    // ref.lastImageDraw = img2;

    ref.appendDrawing(image)

    // $.ajax({
    //   type: 'post',
    //   url: 'http://localhost:8001',
    //   data: {image},
    //   crossDomain: true,
    //   success: (data, txt, jqxhr) => {
    //     // console.log('sent to server', data);
    //     ref.appendDrawing(data)
    //   }
    // }).fail((xhr, status, error) => {
    //   console.error(error);
    // });

  }

}




