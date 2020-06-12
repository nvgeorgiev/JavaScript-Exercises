function solve() {
  const screen = document.querySelector('#expressionOutput');
  const output = document.querySelector('#resultOutput');
  document.querySelector('.clear').addEventListener('click', () => {
    memory.first = '';
    memory.second = '';
    memory.operator = '';
    screen.textContent = '';
    output.textContent = '';
  });

  // добавяме eventListeners
  [...document.querySelector('div.keys').querySelectorAll('button')].forEach(
    (b) => {
      b.addEventListener('click', onClick);
    }
  );
  const memory = {
    first: '',
    second: '',
    operator: '',
  };

  const operators = {
    '+': () => Number(memory.first) + Number(memory.second),
    '-': () => Number(memory.first) - Number(memory.second),
    '*': () => Number(memory.first) * Number(memory.second),
    '/': () => Number(memory.first) / Number(memory.second),
    '=': true,
  };

  function onClick(e) {
    const value = e.target.value;
    if (operators.hasOwnProperty(value)) {
      if (value == '=') {
        output.textContent = operators[memory.operator]();
      } else {
        memory.operator = value;
      }
    } else {
      if (memory.operator === '') {
        memory.first += value;
      } else {
        memory.second += value;
      }
    }

    screen.textContent = `${memory.first} ${memory.operator} ${memory.second}`;
  }
}
