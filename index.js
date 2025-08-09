const userInputString = prompt(
  "Please type the flavors you would like below, seperated by a comma",
  " vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const flavors = userInputString.split(",");
console.log(flavors);

function numberOfOrders(userInput) {
  const countOfOrders = {};
  for (let flavorItem of userInput) {
    if (flavorItem in countOfOrders) {
      countOfOrders[flavorItem] += 1;
    } else {
      countOfOrders[flavorItem] = 1;
    }
  }
  return countOfOrders;
}

function numberOfFlavors(userInput) {
  const countOfFlavors = {};
  for (let flavor of userInput) {
    if (flavor in countOfFlavors) {
      countOfFlavors[flavor] += 1;
    } else {
      countOfFlavors[flavor] = 1;
    }
  }
  return countOfFlavors;
}

console.log(numberOfOrders(flavors));
console.log(numberOfFlavors(flavors));
