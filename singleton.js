'use strict'

class Wall {
  constructor(){
    this.height = 0;
    if (Wall._instance)
      return Wall._instance;
    Wall._instance = this;
  }
  setHeight(height){
    this.height = height;
  }
  getStatus(){
    console.log(`the wall is ${this.height}m high.`)
  }
  getInstance(){
    if(! Wall._instance){
      Wall._instance = new Wall()
    }
    return Wall._instance;
  }
}

let a = new Wall()
a.setHeight(3.2)

let b = new Wall()
b.setHeight(4.5)

a.getStatus()
b.getStatus()


