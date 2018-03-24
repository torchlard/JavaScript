'use strict'

let Westeros = {};
class Event{
  constructor(name){
    this.name = name
  }
}
Westeros.Event = Event;

class Prize {
  constructor(name){
    this.name = name
  }
}
Westeros.Prize = Prize;

class Attendee {
  constructor(name){
    this.name = name
  }
}
Westeros.Attendee = Attendee;

class Tournament {
  constructor(){
    this.events = [];
    this.attendees = [];
    this.prizes = [];
  }
} 
Westeros.Tournament = Tournament;


class LannisterTournamentBuilder {
  build(){
    let tournament = new Tournament();
    tournament.events.push(new Event('Joust'));
    tournament.events.push(new Event('Melee'));
    
    tournament.attendees.push(new Attendee('Jamie'));
    
    tournament.prizes.push(new Prize('Gold'));
    tournament.prizes.push(new Prize('More gold'));
    
    return tournament;
  }
}
Westeros.LannisterTournamentBuilder = LannisterTournamentBuilder;

class BaratheonTournamentBuilder {
  build(){
    let tournament = new Tournament();
    tournament.events.push(new Event('Joust'));
    tournament.events.push(new Event('Melee'));
    
    tournament.attendees.push(new Attendee('Stannis'));
    tournament.attendees.push(new Attendee('Robert'));
    
    return tournament;
  }
}
Westeros.BaratheonTournamentBuilder = BaratheonTournamentBuilder;

// final builder
class TournamentBuilder {
  build(builder){
    return builder.build()
  }
}
Westeros.TournamentBuilder = TournamentBuilder;


// == main ==
let builder = new TournamentBuilder();
let match_baratheon = builder.build(new BaratheonTournamentBuilder());
console.log(match_baratheon)


