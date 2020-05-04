function solve(array) {
  let obj = {};

  for (let index = 0; index < array.length; index += 2) {
    let element = array[index];
    let value = Number(array[index + 1]);

    obj[element] = value;
  }

  console.log(obj);
}

const test0 = ['Yoghurt', 48, 'Rise', 138, 'Apple', 52];
// Expected output :
// test0 = { Yoghurt: 48, Rise: 138, Apple: 52 }

const test1 = ['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42];
// Expected output :
// test1 = { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }

solve(test1);
