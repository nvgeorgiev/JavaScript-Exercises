function addItem() {
  const itemsList = document.getElementById('items');
  const textInput = document.getElementById('newText');

  let textInputValue = textInput.value;

  if (textInputValue.lenght === 0) {
    return;
  }

  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = '[Delete]';
  a.href = '#';
  const text = document.createTextNode(textInputValue);
  li.appendChild(text);
  li.appendChild(a);
  a.addEventListener('click', onDelete);

  itemsList.appendChild(li);
  textInput.value = '';

  function onDelete(e) {
    e.preventDefault;
    e.target.parentElement.remove();
  }
}
