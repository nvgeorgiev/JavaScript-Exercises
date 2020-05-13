function sortByTwoCriteria(arr) {
  const sortedArr = arr
    .sort()
    .sort((firstName, secondName) => firstName.length - secondName.length);

  return sortedArr.join('\n');
}

console.log(
  sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
);
