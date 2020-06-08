function solve(input) {
  const catalog = {};

  for (let line of input) {
    const [brand, model, produced] = line.split(' | ');

    if (catalog.hasOwnProperty(brand) === false) {
      catalog[brand] = {};
    }

    if (catalog[brand].hasOwnProperty(model) === false) {
      catalog[brand][model] = 0;
    }

    catalog[brand][model] += Number(produced);
  }

  Object.entries(catalog).forEach(([brand, model]) => {
    console.log(brand);
    Object.entries(model).forEach(([name, produced]) => {
      console.log(`###${name} -> ${produced}`);
    });
  });
}

solve([
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10',
]);
