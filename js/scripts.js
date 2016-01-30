// BUSINESS
function PizzaOrder(size,toppings,delivery) {
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
}

PizzaOrder.prototype.sizeCost = function() {
  var sizeChoices = {
    small: 6,
    medium: 9,
    large: 12
  };
  return sizeChoices[this.size];
}

PizzaOrder.prototype.toppingsCost = function() {
  var toppingsCostTotal = 0;
  var toppings = {
    pepperoni: 2,
    anchovies: 4,
    veggie: 3,
    olives: 1,
    pineapple: 2
  };
  this.toppings.forEach(function(topping) {
    toppingsCostTotal += toppings[topping];
  });
  return toppingsCostTotal;
}

PizzaOrder.prototype.deliveryCost = function() {
  var deliveryDefault = 0
  var deliveryOptions = {
    yes: 10,
    no: 0,
  };
  return deliveryOptions[this.delivery];
}

PizzaOrder.prototype.pizzaCost = function() {
  return this.sizeCost() + this.toppingsCost() + this.deliveryCost();
}



// USER-INTERFACE
$(document).ready(function() {
  $('#orderForm').submit(function(event) {
    event.preventDefault();

    var size = $("input[name=optradio1]:checked").val();
    var toppings = [];
    var delivery = $("input[name=optradio2]:checked").val();

    $("input:checkbox:checked").map(function(){
      toppings.push($(this).val());
    });

    var pizzaOrder = new PizzaOrder(size,toppings,delivery);
    var price = pizzaOrder.pizzaCost();

    $("span#price").text(price);

  });
});

// function PizzaOrder() {
//   this.size = size;
//   this.toppings = toppings;
// }



// PizzaOrder.prototype.priceCalculator = function() {
//   var pizzaPrice = this.smallPizza + this.mediumPizza + this.largePizza + this.pepperoni + this.anchovies + this.veggie + this.olives + this.pineapple;
//   return pizzaPrice;
// }

// $(document).ready(function() {
//   $("****").submit(function(event) {
//   event.preventDefault();
//
//   });
// });
