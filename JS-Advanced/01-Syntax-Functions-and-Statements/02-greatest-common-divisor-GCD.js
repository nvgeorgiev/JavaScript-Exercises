function solve(x, y) {
  while (y) {
    let temp = y;
    y = x % y;
    x = temp;
  }

  return x;
}

console.log(solve(8, 4));

// Version 2

function solve2(...params) {
  while (params[1]) {
    let temp = params[1];
    params[1] = params[0] % params[1];
    params[0] = temp;
  }

  return params[0];
}

console.log(solve(15, 5));

// Expected output:
// 5
