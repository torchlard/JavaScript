'use strict';

const A = {

}

class CustomText {
  constructor(stage){
    this.layer = new Konva.Layer();
    this.stage = stage;
    this.initText();
    // textarea = document.getElementById("textarea");
    this.listenEditing();
  }

  initText(){
    this.textTemplate = new Konva.Text({
      x: 15,
      y: 15,
      text: 'sample text',
      fontSize: 25,
      fontFamily: 'Arial',
      fill: 'black',
      padding: 0
    });
    this.textTemplate.setDraggable(true);

    this.layer.add(this.textTemplate);
    this.stage.add(this.layer);
    this.layer.draw();
  }

  editText(){
    const textarea = document.createElement('textarea');
    const save_text = document.getElementById("save-text");

    const color_picker = document.getElementById("colorpicker");
    const show_color = document.getElementById("show-color");
    const align_left = document.getElementById("align_left");
    const align_right = document.getElementById("align_right");
    const align_center = document.getElementById("align_center");
    const align_justify = document.getElementById("align_justify");
    const text_bold = document.getElementById("text_bold");
    const text_italic = document.getElementById("text_italic");
    const text_underline = document.getElementById("text_underline");
    const font_size = document.querySelector("input[name='font_size']");
    const font_family = document.getElementById("font-family");
    const font_alpha = document.querySelector("input[name='pen-alpha']");

    const change_color = (e) => textarea.style.color = show_color.value;
    const change_left = (e) => textarea.style.align = 'left';
    const change_right = (e) => textarea.style.textAlign = 'right';
    const change_center = (e) => textarea.style.textAlign = 'center';
    const change_justify = (e) => textarea.style.textAlign = 'justify';
    const change_normal = (e) => textarea.style.fontStyle = 'normal';
    const change_bold = (e) => {
      textarea.style.fontWeight = 'bold';
      textarea.style.fontStyle = 'normal';
      text_style = "bold";
    }
    const change_italic = (e) => {
      textarea.style.fontWeight = 'normal';
      textarea.style.fontStyle = 'italic';
      text_style = "italic"
    }
    const change_underline = (e) => textarea.style.textDecoration = 'underline';
    const change_font_size = (e) => textarea.style.fontSize = font_size.value + 'px';
    const change_font_family = () => textarea.style.fontFamily = font_family.value;
    const change_font_alpha = () => textarea.style.opacity = font_alpha.value;

    document.body.appendChild(textarea);

    const textPosition = this.textTemplate.getAbsolutePosition();
    const stageBox = this.stage.getContainer().getBoundingClientRect();
    this.textTemplate.hide();
    this.layer.draw();

    // textarea.style.display = 'initial';
    textarea.style.top = textPosition.y + stageBox.left +'px';
    textarea.style.left = textPosition.x + stageBox.top +'px';
    textarea.value = this.textTemplate.text();
    textarea.style.width = this.textTemplate.width() + 'px';
    textarea.style.fontFamily = this.textTemplate.fontFamily();
    textarea.style.fontSize = this.textTemplate.fontSize() + 'px';
    textarea.style.color = this.textTemplate.fill();
    textarea.style.textAlign = this.textTemplate.align();
    textarea.style.textDecoration = this.textTemplate.textDecoration();
    textarea.style.opacity = this.textTemplate.opacity();

    let text_style = this.textTemplate.fontStyle();
    if (text_style == "bold") {
      // textarea.style.fontStyle = "normal";
      // textarea.style.fontWeight = "bold";
      change_normal(); change_bold();
    } else if (text_style == "italic") {
      // textarea.style.fontStyle = "italic";
      textarea.style.fontWeight = "normal";
      change_italic();
    } else if (text_style == "normal"){
      // textarea.style.fontStyle = "normal";
      change_normal();
      textarea.style.fontWeight = "normal";
    }


    textarea.focus();

    color_picker.addEventListener('mouseup', change_color);
    align_left.onclick = change_left;
    align_right.onclick = change_right;
    align_center.onclick = change_center;
    align_justify.onclick = change_justify;
    text_bold.onclick = change_bold;
    text_italic.onclick = change_italic;
    text_underline.onclick = change_underline;
    font_size.oninput = change_font_size;
    font_family.onchange = change_font_family;
    font_alpha.oninput = change_font_alpha;

    textarea.addEventListener('keydown', (e) => {
      if(e.keyCode === 27){ //Esc
        this.textTemplate.text(textarea.value);
        const width = textarea.style.width;
        this.textTemplate.width(width.substr(0, width.length-2));
        this.textTemplate.fill(textarea.style.color);
        this.textTemplate.align(textarea.style.textAlign);
        this.textTemplate.textDecoration(textarea.style.textDecoration);
        if (text_style == "normal" || text_style == "italic"){
          this.textTemplate.fontStyle(text_style)
        } else {
          this.textTemplate.fontStyle('bold')
        }
        const size = textarea.style.fontSize;
        this.textTemplate.fontSize(size.substr(0,size.length-2));
        this.textTemplate.fontFamily(textarea.style.fontFamily);
        this.textTemplate.opacity(textarea.style.opacity);

        this.textTemplate.show();
        document.body.removeChild(textarea);

        color_picker.removeEventListener("mouseup", change_color );
        align_left.removeEventListener("click", change_left );
        align_right.removeEventListener("click", change_right );
        align_center.removeEventListener("click", change_center );
        align_justify.removeEventListener("click", change_justify );
        text_bold.removeEventListener("click", change_bold);
        text_italic.removeEventListener("click", change_italic );
        text_underline.removeEventListener("click", change_underline );
        font_size.removeEventListener("input", change_font_size );
        font_family.removeEventListener("chagne", change_font_family );
        font_alpha.removeEventListener("input", change_font_alpha );

        this.stage.draw();
      }
    });

  }

  listenEditing(){
    this.textTemplate.on('dblclick', () => this.editText());
    // this.textTemplate.on('click', () => {
    //   this.textTemplate.shadowColor('green');
    // });
  }

}














