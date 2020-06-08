function solve(input) {
  const juiceCatalog = {};
  const juiceBottles = {};

  for (let line of input) {
    const [juice, quantity] = line.split(' => ');

    if (juiceCatalog.hasOwnProperty(juice) === false) {
      juiceCatalog[juice] = 0;
    }

    juiceCatalog[juice] += Number(quantity);

    if (juiceCatalog[juice] >= 1000) {
      if (juiceBottles.hasOwnProperty(juice) === false) {
        juiceBottles[juice] = 0;
      }
      let bottles = Math.floor(juiceCatalog[juice] / 1000);
      let quantityLeft = juiceCatalog[juice] - bottles * 1000;
      juiceCatalog[juice] = quantityLeft;
      juiceBottles[juice] += bottles;
    }
  }

  Object.entries(juiceBottles).forEach(([juice, bottles]) => {
    console.log(`${juice} => ${bottles}`);
  });
}

solve([
  'Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789',
]);
