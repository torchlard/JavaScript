const getRandomInt = (min, max) => 
  Math.floor(Math.random()*(max-min))+min


export function fetchCounter(callback){
  setTimeout(() => {
    callback(getRandomInt(1,100))
  }, 500)
}
  
  
  
  
