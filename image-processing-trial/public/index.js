// (function(){
// 
// })();
const takePicture = document.querySelector("#take-pic");
const showPicture = document.getElementById("show-pic");

takePicture.onchange = (event) => {
  let files = event.target.files, file;
  if(files && files.length>0){
    file = files[0];
  }
  
  let URL = window.URL || window.webkitURL;
  let imgURL = URL.createObjectURL(file);
  showPicture.src = imgURL;
  URL.revokeObjectURL(imgURL);
};

const constraints = {video: true};

navigator.mediaDevices.getUserMedia(constraints)
  .then((mediaStream) => {
    let video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = (e) => video.play()
    
  }).catch( err => console.log(`${err.name}: ${err.message}`));





