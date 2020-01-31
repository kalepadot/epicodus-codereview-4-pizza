// Business Logic

function Pizza(size, crust, base, cheese, toppings, method, price) {
  this.setSize = size;
  this.setCrust = crust;
  this.setBase = base;
  this.setCheese = cheese;
  this.toppings = toppings;
  this.method = method;
  this.price = price;
  console.log(this);
}
Pizza.prototype.getPrice = function() {
  console.log("setSize");
  console.log(this.setSize);
  if (this.setSize === "sm") {
    this.price = 10;
  } else if (this.setSize === "med") {
    this.price = 12;
  } else if (this.setSize === "lg") {
    this.price = 14;
  }
  // return this.price;
};
Pizza.prototype.Crust = function() {
  if (this.setCrust === "glutenFree") {
    this.price += 1;
  }
};
console.log(window.location);
var myPizza = new Pizza("sm", "glutenFree", "pesto", "noCheese", "pepperoni", "delivery");
console.log(myPizza);
var Price = myPizza.getPrice();
console.log("price",myPizza.price);