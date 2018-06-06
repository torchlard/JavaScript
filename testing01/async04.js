var url = 'https://api.github.com/users/torvalds';

/* =========== XHR ============== */

// var xhr = new XMLHttpRequest();
// xhr.open('GET', url);
// xhr.responseType = 'json';
// xhr.onload = function(){
//   console.log(xhr.response);
// };
// xhr.onerror = function(){
//   console.log("oops, Error");
// };
// xhr.send();

/* ======= fetch ================= */

// fetch(url).then(function(response){
//   return response.json();
// }).then(function(data){
//   console.log(data);
// }).catch(function(e){
//   console.log("oh, error");
// });

// ======= better style ===========

// fetch(url).then(response => response.json())
//   .then(data => console.log(data))
//   .catch(e => console.log("oh,no"));

// ======= use async/await =========

(async function(){
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch(e){
    console.log("oh, well");
  }
})();



