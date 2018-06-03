
let list = document.querySelectorAll(".btn");
list.forEach( i =>  {
  i.onclick = () => {
    console.log(i.getAttribute('id'));
  }
})






