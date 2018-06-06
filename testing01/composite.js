'use strict'

class SimpleIngredient {
  constructor(name, calories, ironContent, vitaminContent){
    [this.name, this.calories, this.ironContent, this.vitaminContent] =
      [name, calories, ironContent, vitaminContent];
  }
  GetName(){
    return this.name
  }
  GetCalories(){
    return this.calories
  }
  GetIronContent(){
    return this.ironContent
  }
  GetVitaminContent(){
    return this.vitaminContent
  }
}

class ComplexIngredient {
  constructor(name){
    this.name = name;
    this.ingredients = [];
  }
  AddIngredient(ingredient){
    this.ingredients.push(ingredient)
  }
  GetName(){
    return this.name
  }
  GetCalories(){
    let total = 0;
    for (let i of this.ingredients)
      total += i.GetCalories();
    return total;
  }
  GetIronContent(){
    let total = 0;
    for(let i of this.ingredients)
      total += i.GetIronContent();
    return total;
  }
  GetVitaminContent(){
    let total = 0;
    for(let i of this.ingredients)
      total += i.GetVitaminContent();
    return total;
  }
}

// == Main ==
let egg = new SimpleIngredient('egg', 155, 6,0);
let milk = new SimpleIngredient('Milk', 42,0,0);
let sugar = new SimpleIngredient('Sugar', 387, 0,0);
let rice = new SimpleIngredient('Rice', 370,8,0);

let ricePudding = new ComplexIngredient('Rice Pudding')
ricePudding.AddIngredient(egg);
ricePudding.AddIngredient(milk);
ricePudding.AddIngredient(sugar);
ricePudding.AddIngredient(rice);

console.log(`rice pudding calorie: ${ricePudding.GetCalories()}`);
console.log(`rice pudding iron: ${ricePudding.GetIronContent()}`);






