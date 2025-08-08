const userInputString = prompt(
  "Please type the flavors you would like below, seperated by a comma",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const flavors = userInputString.split(",");
console.log(flavors);

function counter(array) {
  const orders = {};
  for (const item of array) {
    if (item in orders) {
      orders[item] += 1;
    } else {
      orders[item] = 1;
    }
  }
  return orders;
}

function ofFlavors(flavors) {
  const counts = {};
  for (const flavor of flavors) {
    if (flavor in counts) {
      counts[flavor] += 1;
    } else {
      counts[flavor] = 1;
    }
  }
  return counts;
}

console.log(counter(flavors));
console.log(ofFlavors(flavors));
