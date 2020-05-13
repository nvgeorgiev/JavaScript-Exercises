function addRemoveElements(arr) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'add') {
      resultArr.push(i + 1);
    } else {
      resultArr.pop();
    }
  }

  return resultArr.length > 0 ? resultArr.join('\n') : 'Empty';
}

console.log(addRemoveElements(['add', 'add', 'remove', 'add', 'add']));
