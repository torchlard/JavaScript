'use strict'

// pseudo interface code
interface Ship {
  setRudderAngleTo(angle: number);
  setStailConfiguration(configuration: SailConfiguration);
  setSailAngle(sailId, sailAngle);
  ...
}

class ShipAdapter {
  constructor(){
    this._ship = new Ship()
  }
  turnLeft(){
    this._ship.setRudderAngleTo(-30);
    this._ship.setSailAngle(3, 12);
  }
  turnRight(){
    this._ship.setRudderAngleTo(30);
    this._ship.setSailAngle(5, -9);
  }
  goForward(){
    // do sth
  }
}

// ==main==
let ship = new ShipAdapter();
ship.goForward()
ship.turnLeft()












