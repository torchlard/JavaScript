'use strict'

class Container {
  constructor(x){
    this.$value = x;
  }
  static of(x){
    return new Container(x)
  }
}

Container.prototype.map = function(f){
  return Container.of(f(this.$value))
}

class Maybe {
  static of(x){
    return new Maybe(x)
  }
  get isNothing(){
    return this.$value === null || this.$value === undefined
  }
  constructor(x){
    this.$value = x
  }
  map (fn){
    return this.isNothing ? this : Maybe.of(fn(this.$value))
  }
  inspect(){
    return this.isNothing ? 'nothing' : `Just(${inspect(this.$value)})`
  }
}


// console.log(Container.of(3).map(f => f+2));
// console.log(Container.of('hostdog').map(x => x.toUpperCase()));

console.log(Maybe.of({name: 'boris', age:14}).map(prop('age')).map(add(10)).inspect() );

















