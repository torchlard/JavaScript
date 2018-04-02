'use strict';

class CustomImage extends BaseShape {
  constructor(targetImage, stage){
    super(targetImage, stage);
    super.turnColorScale();
    this.initImage();
    this.active = true;
  }

  constructImage(src){
    const img = new Image();
    img.src = src;
    const imageTemplate = new Konva.Image({
      x: 10,
      y: 10,
      image: imageObj,
      // width: 200,
      // height: 200,
      draggable: false,
      id: 'img'
    });
    return imageTemplate;
  }

  initImage(){
    let base_layer = super.buildPicture();
    this.stage.add(base_layer)
    this.register_listener();

    let click_mark=0;
    this.stage.on('click', (evt) => {
      let shape = evt.target;
      if (shape == this.baseImage){
        this.active = true;
        this.baseImage.strokeBlur(10);
        this.register_listener()
      } else {
        this.active = false;
        this.baseImage.strokeBlur(0);
        this.remove_listener();
      }
    });
  }

  // register listener
  register_listener(){
    resize_btn.onclick = () => super.buildAllAnchor();
    saveCrop_btn.onclick = () => stop();

    grey_btn.onclick = () => super.turnGreyScale();
    color_btn.onclick = () => super.turnColorScale();
    invert_btn.onclick = () => super.invert();
    mask_btn.onclick = () => super.turnMaskScale();
    sepia_btn.onclick = () => super.turnSepia();
    solarize_btn.onclick = () => super.turnSolarize();
    startPaint_btn.onclick = ()

    brightness_range.oninput = () => super.brightness(brightness_range.value);
    contrast_range.oninput = () => super.contrast(contrast_range.value);
    blur_range.oninput = () => super.blur(blur_range.value);
    hue_range.oninput = () => super.hue(hue_range.value);
    saturate_range.oninput = () => super.saturate(saturate_range.value);
    lightness_range.oninput = () => super.lightness(lightness_range.value);
    mask_range.oninput = () => super.mask(mask_range.value);
    noise_range.oninput = () => super.noise(noise_range.value);
    pixelate_range.oninput = () => super.pixelate(pixelate_range.value);
    posterize_range.oninput = () => super.posterize(posterize_range.value);
    rotate_range.oninput = () => super.rotate(rotate_range.value);
    alpha_range.oninput = () => super.alpha(alpha_range.value);
  }

  remove_listener(){
    resize_btn.removeEventListener('click', super.buildAllAnchor);

    grey_btn.removeEventListener('click', super.turnGreyScale);
    color_btn.removeEventListener('click', super.turnColorScale );
    invert_btn.removeEventListener('click', super.invert)
    mask_btn.removeEventListener('click', super.mask)
    sepia_btn.removeEventListener('click', super.sepia)
    solarize_btn.removeEventListener('click', super.solarize)

    brightness_range.removeEventListener('click', super.brightness)
    contrast_range.removeEventListener('click', super.contrast)
    blur_range.removeEventListener('click', super.blur)
    hue_range.removeEventListener('click', super.hue)
    saturate_range.removeEventListener('click', super.saturate)
    lightness_range.removeEventListener('click', super.lightness)
    mask_range.removeEventListener('click', super.mask)
    noise_range.removeEventListener('click', suepr.noise)
    pixelate_range.removeEventListener('click', super.pixelate)
    posterize_range.removeEventListener('click',super.posterize)
    rotate_range.removeEventListener('click', super.rotate)
    alpha_range.removeEventListener('click', super.alpha)

  }




}



