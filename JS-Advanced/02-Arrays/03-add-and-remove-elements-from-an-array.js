function addRemoveElements(arr) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'add') {
      resultArr.push(i + 1);
    } else {
      resultArr.pop();
    }
  }

  if (resultArr.length === 0) {
    return 'Empty';
  } else {
    return resultArr.join('\n');
  }
}

console.log(addRemoveElements(['add', 'add', 'remove', 'add', 'add']));
