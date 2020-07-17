// This is a function that creates HTLM elements, can set their attributes(id and ect.) and writes their content
function createHTMLelement(type, content, attributes) {
  const result = document.createElement(type);

  if (attributes !== undefined) {
    Object.assign(result, attributes);
  }

  if (Array.isArray(content)) {
    content.forEach(append);
  } else {
    append(content);
  }

  function append(node) {
    if (typeof node === 'string' || typeof node === 'number') {
      node = document.createTextNode(node);
    }
    result.appendChild(node);
  }

  return result;
}

// Creating buttons and inserting them into the HTML
const deleteBtn = createHTMLelement('button', 'Delete', {
  className: 'btn delete',
});
const archiveBtn = createHTMLelement('button', 'Archive', {
  className: 'btn archive',
});

// Chaining the creation of Article element with sub elements to be inserted into the HTML
const article = createHTMLelement('article', [
  createHTMLelement('h1', title),
  createHTMLelement('p', ['Category: ', createHTMLelement('strong', category)]),
  createHTMLelement('p', ['Creator: ', createHTMLelement('strong', creator)]),
  createHTMLelement('p', content),
  createHTMLelement('div', [deleteBtn, archiveBtn], { className: 'buttons' }),
]);
