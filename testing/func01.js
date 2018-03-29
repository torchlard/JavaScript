'use strict'

// // first pure
// const Map = Immutable.Map
//
// const jobe = Map({name: 'jobe', hp: 20, team: 'red'})
// const michael = Map({name: 'michael', hp: 20, team: 'green'})
// const decreaseHP = p => p.set('hp', p.get('hp')-1)
// const isSameTeam = (p1, p2) => p1.get('team') === p2.get('team')
// const punch = (a,t) => (isSameTeam(a,t) ? t : decreaseHP(t));
//
// console.log(punch(jobe, michael).get('hp'));


// // currying
// const add = x => y => x+y;
// const increment = add(1);
// const addTen = add(10);
//
// console.log(increment(2));
// console.log(addTen(2));

// const match = curry((what,s) => s.match(what));
// const replace = curry((what,replacement, s) => s.repalce(what, replacement) );
// const filter = curry((f, xs) => xs.filter(f));
// const map = curry((f, xs) => xs.map(f));
//
// console.log(match(/r/g, 'hello world'));
//
// const hasLetterR = match(/r/g);
// console.log(hasLetterR('hello world'));
// console.log(hasLetterR('jsjkd j and s and t'));
//
// console.log(filter(hasLetterR, ['rock and roll', 'smooth']));

// // compose
// const toUpperCase = x => x.toUpperCase();
// const exclaim = x => `${x}!!`;
// const shout = compose(toUpperCase, exclaim);
//
// console.log(shout('go home'));
//
// const head = x => x[0];
// const reverse = reduce((acc, x) => [x].concat(acc), []);
// const last = compose(toUpperCase, exclaim, reverse);
//
// console.log(last(['jumpkick','roundhouse','uppercut']));

// const car1 = { name:'aston', horsepower: 700, dollar: 185000, in_stock: true };
// const car2 = { name:'triaal', horsepower: 500, dollar: 25000, in_stock: false };
//
// const last = xs => xs[xs.length-1];
// const prop = curry((p, obj) => obj[p]);
// const average = xs => reduce(add, 0, xs) / xs.length;
// const append = flip(concat)
//
// const isLastInStock = compose(prop('dollar'), last)
// const averageDollarValue = compose(average , map(prop('dollar')) );
// const fastestCar = compose( append(' is the fastest'), prop('name'), last, sortBy(prop('horsepower')))
//
// // console.log(isLastInStock([car2, car1]));
// // console.log(averageDollarValue([car1, car2]));
//
// console.log(fastestCar([car1, car2]));


const CDN = s => `https://cdnjs.cloudflare.com/ajax/libs/${s}`;
const ramda = CDN('ramda/0.21.0/ramda.min');
const jquery = CDN('jquery/3.0.0-rc1/jquery.min');

requirejs.config({ paths: {ramda, jquery}});
require(['jquery', 'ramda'], ($, {compose, curry, map, prop}) => {

  const Impure = {
    getJSON: curry((callback, url) => $.getJSON(url, callback)),
    setHtml: curry((sel, html) => $(sel).html(html)),
    trace: curry((tag,x) => { console.log(tag, x); return x;})
  };

  // compose url
  const host = 'api.flickr.com';
  const path = '/services/feeds/photos_public.gne';
  const query = t => `?tags=${t}&format=json&jsoncallback=?`;
  const url = t => `https://${host}${path}${query(t)}`;

  // generate image url list
  const mediaUrl = compose(prop('m'), prop('media'));

  // insert array of <img> to body
  const img = src => $('<img/>', {src});
  const mediaToImg = compose(img, mediaUrl);
  const images = compose( map(mediaToImg), prop('items'));
  const render = compose(Impure.setHtml('body'), images);

  const app = compose(Impure.getJSON(render), url);
  app('cats');



});










