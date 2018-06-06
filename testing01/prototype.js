'use strict'

class Lannister {
  clone(){
    let clone = new Lannister();
    for(let attr in this){
      clone[attr] = this[attr]
    }
    return clone
  }
}

let jamie = new Lannister();
jamie.charm = 6;
jamie.swordSkills = 9;
jamie.wealth = 10;

let tyrion = jamie.clone();
tyrion.charm = 10;
console.log(tyrion)














