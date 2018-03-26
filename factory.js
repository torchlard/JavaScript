'use strict'

class WateryGod {
  prayTo(){
    console.log('i am watery god')
  }
}
class AncientGod {
  prayTo(){
    console.log('i am ancient god')
  }
}
class DefaultGod {
  prayTo(){
    console.log('i am default god')
  }
}

class GodFactory {
  Build(godName){
    if (godName === "watery"){
      return new WateryGod
    } else if (godName === "ancient"){
      return new AncientGod
    } else {
      return new DefaultGod
    }
  }
}

class GodDeterminant {
  constructor(religionName, prayerPurpose){
    this.religionName = religionName;
    this.prayerPurpose = prayerPurpose;
  }
}

class Prayer {
  pray(godName){
    (new GodFactory).Build(godName).prayTo()
  }
}

let person1 = new Prayer;
person1.pray('watery');









