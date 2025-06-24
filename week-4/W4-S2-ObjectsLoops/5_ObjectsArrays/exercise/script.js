// create your coffee object array here
var orders = [
  { type: "latte", milk: true, customer: "Alice" },
  { type: "espresso", milk: false, customer: "Bob" },
  { type: "cappuccino", milk: true, customer: "Charlie" },
];
// create your print order function here
function printOrders(orderList) {
  for (var i = 0; i < orderList.length; i++) {
    var order = orderList[i];
    var milk;

    if (order.milk === true) {
      milk = "Yes";
    } else {
      milk = "No";
    }

    console.log(
      "Customer: " +
        order.customer +
        ", Coffee: " +
        order.type +
        ", Milk: " +
        milk
    );
  }
}

printOrders(orders);
