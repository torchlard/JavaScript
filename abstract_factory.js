'use strict'

/** 
 * Abstract Factory
 * @King: KingJoffery, KingAerys
 * @Lord: LordTywin, LordConnington
 * @Factory: LannisterFactory, TargaryenFactory
 */

// define higher level objects
var KingJoffery = (function(){
  function KingJoffery(){
    this.name = 'myking'
  }
  KingJoffery.prototype.makeDecision = function(){
    console.log('kill the man')
  };
  KingJoffery.prototype.marry = function(){
    console.log("I marry")
  };
  return KingJoffery;
})();

var LordTywin = (function(){
  function LordTywin(){
  }
  LordTywin.prototype.makeDecision = function(){
    console.log('tywin attack')
  };
  return LordTywin;
})();

var KingAerys = (function(){
  function KingAerys(){
  }
  KingAerys.prototype.makeDecision = function(){
    console.log('no way')
  };
  KingAerys.prototype.marry = function(){
  };
  return KingAerys;
})();

var LordConnington = (function(){
  function LordConnington(){
  }
  LordConnington.prototype.makeDecision = function(){
    console.log('go away')
  };
  return LordConnington;
})();

// define factory calling different object
var LannisterFactory = (function(){
  function LannisterFactory(){
  }
  LannisterFactory.prototype.getKing = function(){
    return new KingJoffery();
  }
  LannisterFactory.prototype.getHandOfKing = function(){
    return new LordTywin();
  }
  return LannisterFactory;
})();

var TargaryenFactory = (function(){
  function TargaryenFactory(){
    
  }
  TargaryenFactory.prototype.getKing = function(){
    return new KingAerys();
  }
  TargaryenFactory.prototype.getHandOfKing = function(){
    return new LordConnington();
  }
  return TargaryenFactory;
})();

// helper class to do tasks
var CourtSession = (function(){
  function CourtSession(abstractFactory){
    this.abstractFactory = abstractFactory;
    this.COMPLAINT_THRESHOLD = 10;
  }
  CourtSession.prototype.complaintPresented = function(complaint){
    if(complaint.severity < this.COMPLAINT_THRESHOLD){
      this.abstractFactory.getHandOfKing().makeDecision();
    } else {
      this.abstractFactory.getKing().makeDecision();
    }
  };
  return CourtSession;
})();

// == main program ==
var courtSession1 = new CourtSession(new TargaryenFactory());
courtSession1.complaintPresented({severity: 10});
courtSession1.complaintPresented({severity: 8});

var courtSession2 = new CourtSession(new LannisterFactory());
courtSession2.complaintPresented({severity: 8});
courtSession2.complaintPresented({severity: 12});













