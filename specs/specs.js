describe('PizzaOrder', function() {
  it("creates a PizzaOrder object with size and topping properties",function() {
    var testPizzaOrder = new PizzaOrder("small","pepperoni","yes");
    expect(testPizzaOrder.size).to.equal("small");
    expect(testPizzaOrder.toppings).to.equal("pepperoni");
    expect(testPizzaOrder.delivery).to.equal('yes');
  });
  it("creates a prototype to calculate the size cost", function() {
    var testPizzaOrder = new PizzaOrder("small","pepperoni","yes");
    expect(testPizzaOrder.sizeCost("small")).to.equal(6);
  });
  it("creates a prototype to calculate the cost of toppings", function() {
    var testPizzaOrder = new PizzaOrder("small",["pepperoni"],"yes");
    expect(testPizzaOrder.toppingsCost(["pepperoni"])).to.equal(2);
  });
  it("creates a prototype to calculate the cost of delivery", function() {
    var testPizzaOrder = new PizzaOrder("small","pepperoni","yes");
    expect(testPizzaOrder.deliveryCost("yes")).to.equal(10);
  });
  it('will add the size and toppings and delivery cost to calculate the price', function() {
    var testPizzaOrder = new PizzaOrder("small",["pepperoni"],"yes");
    expect(testPizzaOrder.pizzaCost()).to.equal(18);
  });
});


// describe('PizzaOrder', function() {
//   it("will create a new PizzaOrder constructor with the given properties", function() {
//     var testPizzaOrder = new PizzaOrder("small","pepperoni","olives");
//     expect(testPizzaOrder.size).to.equal("small");
//     expect(testPizzaOrder.toppings).to.eql(["pepperoni","olives"]);
//   });
// });

// describe('Contact', function() {
//   it("creates a new contact with the given properties", function() {
//     var testContact = new Contact("Rita","Moreno");
//     expect(testContact.firstName).to.equal("Rita");
//     expect(testContact.lastName).to.equal("Moreno");
//     expect(testContact.addresses).to.eql([]);
//   });
// });
//
//
// describe('PizzaOrder', function() {
//   it("will create a new PizzaOrder consturctor with the given properties", function() {
//     var testPizzaOrder = new PizzaOrder();
//     expect(testPizzaOrder.smallPizza).to.equal(6);
//     expect(testPizzaOrder.mediumPizza).to.equal(9);
//     expect(testPizzaOrder.largePizza).to.equal(12);
//     expect(testPizzaOrder.pepperoni).to.equal(2);
//     expect(testPizzaOrder.anchovies).to.equal(4);
//     expect(testPizzaOrder.veggie).to.equal(3);
//     expect(testPizzaOrder.olives).to.equal(1);
//     expect(testPizzaOrder.pineapple).to.equal(2);
//   });
//   it("will calculate the cost of the pizza order", function() {
//     var testPizzaOrder = new PizzaOrder();
//     expect(testPizzaOrder.priceCalculator()).to.equal(39);
//   });
// });
