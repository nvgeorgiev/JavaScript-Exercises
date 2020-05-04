function solve(array) {
  const typeOfCoffee = {
    caffeine: 0.8,
    decaf: 0.9,
  };

  let totalIncome = 0;

  for (let currentOrder of array) {
    let price = 0;
    currentOrder = currentOrder.split(', ');

    let balance = Number(currentOrder[0]);
    let typeOfDrink = currentOrder[1];

    if (typeOfDrink === 'coffee') {
      price += typeOfCoffee[currentOrder[2]];
    } else {
      price += 0.8;
    }

    if (currentOrder.includes('milk')) {
      price = Number((price * 1.1).toFixed(1));
    }

    let quantityOfSugar = Number(currentOrder.pop());

    if (quantityOfSugar) {
      price += 0.1;
    }

    function printResult(balance, price, typeOfDrink) {
      if (balance >= price) {
        totalIncome += price;
        console.log(
          `You ordered ${typeOfDrink}. Price: $${price.toFixed(2)} Change: $${(
            balance - price
          ).toFixed(2)}`
        );
      } else {
        console.log(
          `Not enough money for ${typeOfDrink}. Need $${(
            price - balance
          ).toFixed(2)} more.`
        );
      }
    }

    printResult(balance, price, typeOfDrink);
  }
  console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}

const test0 = [
  '1.00, coffee, caffeine, milk, 4',
  '0.40, tea, milk, 2',
  '1.00, coffee, decaf, 0',
];
// Expected output:
// You ordered coffee. Price: $1.00 Change: $0.00
// Not enough money for tea. Need $0.60 more.
// You ordered coffee. Price: $0.90 Change: $0.10
// Income Report: $1.90

const test1 = ['8.00, coffee, decaf, 4', '1.00, tea, 2'];
//Expected output:
// You ordered coffee. Price: $1.00 Change: $7.00
// You ordered tea. Price: $0.90 Change: $0.10
// Income Report: $1.90

solve(test0);
