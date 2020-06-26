function addItem() {
  // взимаме референции и четем свойства
  const textInput = document.querySelector('#newItemText');
  const valueInput = document.querySelector('#newItemValue');
  const text = textInput.value;
  const value = valueInput.value;

  // създаваме нов елемент и променяме неговите свойства
  const option = document.createElement('option');
  option.textContent = text;
  option.value = value;

  // добавяме новия елемент към списъка
  document.querySelector('#menu').appendChild(option);

  // зануляваме полетата
  textInput.value = '';
  valueInput.value = '';
}
