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
  var crust = $("input[name=crust]:checked").val();
  var base = $("input[name=base]:checked").val();
  var cheese = $("input[name=cheese]:checked").val();
  var toppings = []
  $("input[name=topping]:checked").each(function() {
  toppings.push($(this).val());
  // $("input[name=crust]:checked").each(function() {
  //   crust.push($(this).val());
  // });
  });
  var myPizza = new Pizza(size, crust, base, cheese, toppings, null);
  myPizza.getPrice();
  var price = myPizza.getPrice();
  console.log(price);
  return myPizza;
};

console.log(window.location);

// User Logic
$(document).ready(function(){
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("#order").empty();
    var myPizza = generateOrder();
    $('#order').append(`<p>Size: ${myPizza.size}</p>`).append( `<p>Crust: ${myPizza.crust}</p>`).append(`<p>Base: ${myPizza.base}</p>`).append(`<p>Cheese: ${myPizza.cheese}</p>`)
    $("#order").text();
  });
});