function storeCatalogue(inputArr) {
  let sortedArr = inputArr.sort();

  let firstLetter = sortedArr[0][0];
  console.log(firstLetter);

  for (let string of sortedArr) {
    if (string[0] !== firstLetter) {
      firstLetter = string[0];
      console.log(firstLetter);
    }
    let [key, value] = string.split(' : ');
    console.log(` ${key}: ${value}`);
  }
}

storeCatalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
