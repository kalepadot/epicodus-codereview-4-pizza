// Business Logic

function Pizza(size, crust, base, cheese, toppings, method) {
  this.size = size;
  this.crust = crust;
  this.base = base;
  this.cheese = cheese;
  this.toppings = toppings;
  this.method = method;
  this.price = 0;
  console.log(this);
}
Pizza.prototype.getPrice = function() {
  if (this.size === "sm") {
    this.price = 10;
  } else if (this.size === "md") {
    this.price = 12;
  } else if (this.size === "lg") {
    this.price = 14;
  };
  if (this.crust === "glutenFree") {
    this.price += 2;
  } else if (this.crust === "handtossed") {
    this.price +=1;
  }
  this.price += this.toppings.length;
  console.log(this.toppings.length);
  return this.price;
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
  });
  var myPizza = new Pizza(size, crust, base, cheese, toppings, method);
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
    $('#order').append(`<p><span>Size:</span> ${myPizza.size}</p>`).append( `<p><span>Crust:</span> ${myPizza.crust}</p>`).append(`<p><span>Base:</span> ${myPizza.base}</p>`).append(`<p><span>Cheese:</span> ${myPizza.cheese}</p>`).append(`<p><span>Toppings:</span> ${myPizza.toppings}</p>`).append(`<p><span>Method:</span> ${myPizza.method}</p>`).append(`</p><span>Order Total:</span>$ ${myPizza.price}<p>`)
    $("#order").text();
    });
  });
});

