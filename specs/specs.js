describe('PizzaOrder', function() {
  it("will take a new pizza order with the given properties", function() {
    var testPizzaOrder = new PizzaOrder;
    expect(testPizzaOrder.smallPizza).to.equal(6);
    expect(testPizzaOrder.mediumPizza).to.equal(9);
    expect(testPizzaOrder.largePizza).to.equal(12);
    expect(testPizzaOrder.pepperoni).to.equal(2);
    expect(testPizzaOrder.anchovies).to.equal(4);
    expect(testPizzaOrder.veggie).to.equal(3);
    expect(testPizzaOrder.olives).to.equal(1);
    expect(testPizzaOrder.pineapple).to.equal(2);
  });
});
