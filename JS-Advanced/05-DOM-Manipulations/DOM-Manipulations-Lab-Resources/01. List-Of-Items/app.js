function addItem() {
  const itemsList = document.getElementById('items');
  const textInput = document.getElementById('newItemText');
  const textInputValue = textInput.value;
  if (textInputValue == false) {
    return;
  }
  const li = document.createElement('li');
  li.textContent = textInputValue;
  itemsList.appendChild(li);
  textInput.value = '';
}
