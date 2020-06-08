function JSONTable(input) {
  const rows = [];
  // обхождане на входа
  for (let line of input) {
    // JSON.parse на елемeнтите
    const person = JSON.parse(line);
    // съставяме низ, съдържащ HTML ред със стойностите от обекта
    rows.push(createRow(person));
  }
  // отпечатваме началото на таблицата
  console.log('<table>');
  // отпечатваме резултата
  console.log(rows.join('\n'));
  // отпечатваме края на таблицата
  console.log('</table>');

  function createRow(person) {
    return [
      '\t<tr>',
      `\t\t<td>${person.name}</td>`,
      `\t\t<td>${person.position}</td>`,
      `\t\t<td>${person.salary}</td>`,
      '\t</tr>',
    ].join('\n');
  }
}

JSONTable([
  '{"name":"Pesho","position":"Promenliva","salary":100000}',
  '{"name":"Teo","position":"Lecturer","salary":1000}',
  '{"name":"Georgi","position":"Lecturer","salary":1000}',
]);

// Short version solution

function JSONTableV2(data) {
  // обхождане на входа
  // JSON.parse на елемeнтите
  const arr = data.map((x) => JSON.parse(x));

  // съставяме си променлива за резултата със стойност първия ред от таблицата
  let result = '<table>';

  result = arr.reduce((acc, curr) => {
    const value = Object.values(curr);

    return (acc +=
      '\n\t<tr>\n\t\t<td>' + value.join('</td>\n\t\t<td>') + '</td>\n\t</tr>');
  }, result);

  return (result += '\n</table>');
}

console.log(
  JSONTableV2([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
  ])
);
