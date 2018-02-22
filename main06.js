
var map1 = Immutable.Map({a:1, b:3, c:2});
var map2 = map1.set('a',2);


console.log(map1.get('a'));
console.log(map2.get('a'));
console.log(map1.size);

const Map = Immutable.Map;
const map02 = map1.delete('a');
const map03 = map1.clear();
console.log(map1.toJS());
console.log(map02.toJS());
console.log(map03.toJS());

const map5 = map1.update('a', ()=>(7));
console.log(map5.get('a'));
const map6 = Map({b:3});

const Set = Immutable.Set;
const set1 = Set([1,2,4]);
const set2 = set1.add(1).add(5);
console.log(set1.toJS());
console.log(set2.toJS());
const set3 = set1.delete(3);
console.log(set3.toJS());

const obj01 = Immutable.fromJS({
  a:1
});
console.log(obj01.get('a'));

const aaa= Immutable.Range(1, 10).map(n=>-n).take(2).toJS()
console.log(aaa);

const lazySeq = Immutable.Seq(map1);
console.log(lazySeq.map(key => key.toUpperCase()).toJS());


