'use strict'

class WateryGod {
  prayTo(){
    
  }
}
class AncientGod {
  prayTo(){
    
  }
}
class DefaultGod {
  prayTo(){
    
  }
}

class GodFactory {
  Build(godName){
    if (godName === "watery"){
      return new WateryGod()
    } else if (godName === "ancient"){
      return new AncientGod()
    } else {
      return new DefaultGod()
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
    GodFactory.Build(godName).prayTo()
  }
}












