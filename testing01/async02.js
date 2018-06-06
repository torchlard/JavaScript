
// console.log(async function(){}.constructor);
// console.log(async function(){}.__proto__);
// ####### ex1
// async function sleep(para){
//   var obj = await new Promise(function(resolve, reject){
//     setTimeout(function() {
//       resolve(para*para)
//     }, 100)
//   });
//   return obj;
// }
// 
// sleep(2).then( (val) => console.log(val) )
// 
// async function calc(){
//   for(var i=0; i<3; i++){
//     var result = await sleep(i);
//     for(var j=0; j<result; j++){
//       console.log(`i:${i}, j:${j}: ${await sleep(j)}`);
//     }
//   }
// }
// 
// calc()

// ######## ex2
async function wait(x, time){
  return new Promise(resolve => {
    setTimeout(()=> {
      resolve(x);
    }, time*1000);
  });
}
async function go(input,time){
  let result = await wait(input,time);
  console.log(result);
}
go('hey',1)
go('str',0.5);
console.log('yes');














