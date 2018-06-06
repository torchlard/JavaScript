// ## Callback
// function f1(callback){
//   setTimeout(function () {
//     // f1
//     callback();
//   }, 1000);
// }
// function f2(){
//   console.log("f2");
// }
// f1(f2);

// ## Event driven
// function f1() {
//   setTimeout(function(){
//     // f1
//     f1.trigger('done');
//   }, 1000);
// }

// ## public/subscribe/ Observer pattern
// jQuery.subscribe("done", f2);
// function f1(){
//   setTimeout(function(){
//     // f1
//     jQuery.publish("done")
//   }, 1000);
// }
// jQuery.unsubscribe("done",f2);
// ## promise

// ######## Ex1
// here you can see whenever there exists error, it will be caught by 'catch',
// which is short form of .then(undefined, rejected), and return state to normal
// each then returns new Promise object

// const promise = new Promise( function(resolve, reject) {
//   // resolve(1); // place declare execuation content
//   // reject(new Error("error!"));
//   throw new Error("rejected")
//   // reject( new Error("rejected"))
// })
// 
// promise.then( (value) => {
//   console.log(value);
//   return value+1;
// }).then ( (value) => {
//   console.log(value);
//   // throw new Error("err!")
//   console.log('done');
//   return value+2;
// }, (e)=> {  // this rejected function override later catch function
//   console.log("no mama! "+e.message);
// }).catch( (err) => console.log("oh, "+err.message))
// .then((value)=> {
//   var x=10;
//   console.log(value);
//   console.log('done2');
//   throw new Error("fall into well")
//   return x+1;
// }).catch((err) => console.log("ouch, "+err.message))
// .then((x)=>{
//   var x=3;
//   x += 8;
//   console.log(x);
// })

// ###### Ex2
// function doSth1(){
//   console.log('doSth1 start');
//   return new Promise(function (resolve, reject) {
//     console.log('doSth1 end');
//     resolve(1)
//   })
// }
// function doSth2() {
//   console.log('doSth2');
//   return 2
// }
// function finalThing(value) {
//   console.log('finalThing');
//   console.log(value);
//   return 0
// }
// 
// doSth1().then(doSth2).then(finalThing);
// doSth1().then(doSth2()).then(finalThing)
// doSth1().then(function(){ return doSth2()}).then(finalThing)

// ######## Directly create Promise without executor
// Promise.resolve("Success").then(function(value){
//   console.log(value);
// }, function (value) {
//   // will not call
// })
// Promise.reject(new Error("fail")).then(function(error){
//   // will not call
// }, (error)=>{
//   console.log(error);
// })

// ######## multiple promise: get fastest return value
// const p1 = new Promise((resolve, reject) => {
//   setTimeout( () => resolve('p1') , 2000 )
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('p2'), 1000, 'p2' )
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('p3'), 500, 'p3')
// });
// Promise.race([p2,p3]).then((value)=>{
//   console.log(value);
// }).catch((err)=> console.log(err.message) )

// ###### branching
// const p1 = new Promise((resolve, reject)=>{
//   resolve(1)
// });
// p1.then((value)=>{
//   return value+1
// });
// p1.then((value)=>{
//   return value+2
// });



