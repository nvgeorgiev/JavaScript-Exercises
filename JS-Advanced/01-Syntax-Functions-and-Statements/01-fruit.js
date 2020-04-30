function solve(fruit, weight, price) {
  let weightInKg = weight / 1000;
  let totalPrice = weightInKg * price;

  console.log(
    `I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

solve('orange', 2500, 1.8);

// Expected output:
// I need $4.50 to buy 2.50 kilograms orange.

// Version 2, more advanced technic

function solve2(...params) {
  let weightInKg = params[1] / 1000;
  let totalPrice = weightInKg * params[2];

  console.log(
    `I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(
      2
    )} kilograms ${params[0]}.`
  );
}

solve('apple', 1800, 4.3);

// Expected output:
// I need $3.67 to buy 1.56 kilograms apple.
