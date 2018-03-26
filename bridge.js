'use strict'

/**
  * create adapte to provide consistent interface
  * separate common and platform-specific code cleanly
  */

class Sacrifice {

}
class HumanSacrifice {

}
class PrayerPurposeProvider {

}

class OldGods {
  prayTo(sacrifice){
    console.log("we hear your pray")
  }
}
class DrownedGod {
  prayTo(humanSacrifice){
    console.log("bubble grungle")
  }
}
class SevenGods {
  prayTo(prayerPurpose){
    console.log("sorry there a lot of us")
  }
}

class OldGodsAdapter {
  constructor(){
    this._oldGods = new OldGods
  }
  prayTo(){
    this._oldGods.prayTo(new Sacrifice)
  }
}
class DrownedGodAdapter {
  constructor(){
    this._drownedGod = new DrownedGod
  }
  prayTo(){
    this._drownedGod.prayTo(new HumanSacrifice)
  }
}
class SevenGodsAdapter {
  constructor(){
    this._sevenGod = new SevenGods
  }
  prayTo(){
    this._sevenGod.prayTo(new PrayerPurposeProvider)
  }
}

// ==main==

let god1 = new DrownedGodAdapter;
let god2 = new OldGodsAdapter;
let god3 = new SevenGodsAdapter;

let gods = [god1, god2, god3]
for(let god of gods){
  god.prayTo();
}



