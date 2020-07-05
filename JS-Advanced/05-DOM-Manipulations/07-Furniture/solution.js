function solve() {
  console.log('hello from function solve');
  const tbody = document.querySelector('tbody');
  // слагаме Listeners на двата бутон
  const [generate, buy] = [...document.querySelectorAll('button')];
  const [input, output] = [...document.querySelectorAll('textarea')];
  generate.addEventListener('click', onGenerate);
  buy.addEventListener('click', onBuy);

  function onGenerate(e) {
    // прочитаме и парсваме входа
    const data = JSON.parse(input.value);
    // за всеки елемент, създаваме ред със съответното съдържание и добавяме към таблицата
    for (let item of data) {
      const row = document.createElement('tr');
      const html = `<td><img src="${item.img}"></td><td><p>${item.name}</p></td><td><p>${item.price}</p></td><td><p>${item.decFactor}</p></td><td><input type="checkbox" /></td>`;
      row.innerHTML = html;
      tbody.appendChild(row);
    }
  }

  function onBuy(e) {
    // обхождаме таблицата и взимаме само избраните редове
    const boughtItems = [...tbody.querySelectorAll('input')]
      .filter((i) => i.checked)
      .map((i) => i.parentNode.parentNode)
      .map((row) => ({
        name: row.children[1].textContent.trim(),
        price: Number(row.children[2].textContent),
        decFactor: Number(row.children[3].textContent),
      }));
    // композираме резултата
    const result = [
      `Bought furniture: ${boughtItems.map((i) => i.name).join(', ')}`,
      `Total price: ${boughtItems
        .reduce((p, c, i, a) => p + c.price, 0)
        .toFixed(2)}`,
      `Average decoration factor: ${
        boughtItems.reduce((p, c, i, a) => p + c.decFactor, 0) /
        boughtItems.length
      }`,
    ];
    output.value = result.join('\n');
  }
}

solve();
