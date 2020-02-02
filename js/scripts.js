// Business Logic

function Pizza(size, crust, base, cheese, toppings, method, price) {
  this.size = size;
  this.crust = crust;
  this.base = base;
  this.cheese = cheese;
  this.toppings = toppings;
  this.method = method;
  this.price = price;
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
  var method = $("input[name=select-method]:checked").val();
  var toppings = []
  $("input[name=topping]:checked").each(function() {
  toppings.push($(this).val());
  // $("input[name=crust]:checked").each(function() {
  //   crust.push($(this).val());
  // });
  });
  var myPizza = new Pizza(size, crust, base, cheese, toppings, method, price);
  myPizza.getPrice();
  var price = myPizza.getPrice();
  console.log(price);
  return myPizza;
};

console.log(window.location);

// User Logic
$(document).ready(function(){
  $("#zah").click(function() {
    $("form#pizza").show();
    $("#zah").toggle();
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("#order").empty();
    $("#pizza").toggle();
    $("#output").show();
    var myPizza = generateOrder();
    $('#order').append(`<p>Size: ${myPizza.size}</p>`).append( `<p>Crust: ${myPizza.crust}</p>`).append(`<p>Base: ${myPizza.base}</p>`).append(`<p>Cheese: ${myPizza.cheese}</p>`).append(`<p>Toppings: ${myPizza.toppings}</p>`).append(`<p>Method: ${myPizza.method}</p>`).append(`</p>Order Total: ${myPizza.price}<p>`)
    $("#order").text();
    });
  });
});

// need to finish: README.md, price is not showing, style page. If time allows, add user address input for delivery and better display of your order. When order is placed, hide the order form