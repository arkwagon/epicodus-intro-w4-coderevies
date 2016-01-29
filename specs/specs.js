describe('PizzaOrder', function() {
  it("will create a new PizzaOrder consturctor with the given properties", function() {
    var testPizzaOrder = new PizzaOrder();
    expect(testPizzaOrder.smallPizza).to.equal(6);
    expect(testPizzaOrder.mediumPizza).to.equal(9);
    expect(testPizzaOrder.largePizza).to.equal(12);
    expect(testPizzaOrder.pepperoni).to.equal(2);
    expect(testPizzaOrder.anchovies).to.equal(4);
    expect(testPizzaOrder.veggie).to.equal(3);
    expect(testPizzaOrder.olives).to.equal(1);
    expect(testPizzaOrder.pineapple).to.equal(2);
  });
  it("will calculate the cost of the pizza order", function() {
    var testPizzaOrder = new PizzaOrder(testPizzaOrder.mediumPizza, testPizzaOrder.pepperoni);
    expect(testPizzaOrder.priceCalculator()).to.equal(11);
  });
});
