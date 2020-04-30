function solve(array) {
  let number = Number(array.shift());

  let operations = {
    chop: (x) => {
      return x / 2;
    },
    dice: (x) => {
      return Math.sqrt(x);
    },
    spice: (x) => {
      return x + 1;
    },
    bake: (x) => {
      return x * 3;
    },
    fillet: (x) => {
      return x - x * 0.2;
    },
  };

  for (let index = 0; index < array.length; index++) {
    number = operations[array[index]](number);
    console.log(number);
  }
}

let test0 = ['32', 'chop', 'chop', 'chop', 'chop', 'chop'];
// Expected output:
// test0 = 16
//         8
//         4
//         2
//         1

let test1 = ['9', 'dice', 'spice', 'chop', 'bake', 'fillet'];
// Expected output:
// test1 = 3
//         4
//         2
//         6
//         4.8

solve(test0);
