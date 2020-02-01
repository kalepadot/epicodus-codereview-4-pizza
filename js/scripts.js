// Business Logic

function Pizza(size, crust, base, cheese, toppings, method) {
  this.size = size;
  this.crust = crust;
  this.base = base;
  this.cheese = cheese;
  this.toppings = toppings;
  this.method = method;
  console.log(this);
}
Pizza.prototype.getPrice = function() {
   var addCharge = 0;
  if (this.size === "sm") {
    addCharge = 10;
  } else if (this.size === "md") {
    addCharge = 12;
  } else if (this.size === "lg") {
    addCharge = 14;
  };
  if (this.crust === "glutenFree") {
    addCharge += 2;
  } else if (this.crust === "handtossed") {
    addCharge +=1;
  }
  addCharge += this.toppings.length;
  console.log(this.toppings.length);
  return addCharge;
};

function generateOrder() {
  var size = $("input[name=size]:checked").val();
  var toppings = $("input[name=toppings]:checked").toArray().map((el) => el.val())
  var myPizza = new Pizza(size, null, null, null, toppings, null);
  myPizza.getPrice();
  var price = myPizza.getPrice();
  console.log(price);
};

console.log(window.location);

// User Logic
$(document).ready(function(){
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    generateOrder();
  });
});