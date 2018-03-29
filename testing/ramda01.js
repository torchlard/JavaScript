'use strict'

// // find
// const isEven = x => x%2 === 0
// const isOdd = R.complement(isEven)
//
// console.log(R.find(isOdd, [1,2,3,4]));

// // conditional
// const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY
// const wasNaturalized = person => Boolean(person.naturalizationDate)
// const isOVer18 = person => person.age >= 18
//
// const isCitizen = R.either(wasBornInCountry, wasNaturalized)
// const isEligibleToVote = R.both(isOVer18, isCitizen)


// // pipe, compose
const multiply = (a,b) => a*b
const addOne = x => x+1
const square = x => x*x
const operate = R.pipe(
  multiply, addOne, square
)
const operate2 = R.compose(
  square, addOne, multiply
)

console.log(operate2(2,4));


// // normal
// const publishedInYear = year => book => book.year === year
// const titlesForYear = (books, year) => {
//   const selected = R.filter(publishedInYear(year), books)
//   return R.map(book => book.title, selected)
// }

// // curry
// const publishedInYear = R.curry( (year,book) => book.year === year )
// const titlesForYear = (books, year) => {
//   const selected = R.filter(publishedInYear(year), books)
//   return R.map(book => book.title, selected)
// }

// const publishedInYear = R.curry( (year,book) => book.year === year )
// const titlesForYear = (books, year) =>
// R.pipe( R.filter(publishedInYear(year)), R.map(book => book.title) )(books)


// // placeholder: control last argument position
// const addThree = R.curry((a,b,c) => a*1+b*2+c*3)
// const middle = addThree(3, R.__, 4)
// console.log(middle(2));


// // common logics
// const settings = {lineWidth: 60}
// const lineWidth = R.defaultTo(80, settings.lineWidth)
// console.log(lineWidth);

const forever21 = age => age>= 21 ? 21 : age+1
// const forever21_2 = age => R.ifElse(R.gte(R.__, 21), ()=>21, R.inc)(age)
const forever21_3 = R.ifElse(R.gte(R.__, 21), R.always(21), R.inc)
console.log(forever21_3(22));

const alwaysDrivingAge = R.when(R.lt(R.__, 16), R.always(16))

















