// dom file function
function el(type, content, attributes) {
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

// data file functions
function host(endpoint) {
  if (endpoint === undefined) {
    return 'http://localhost:8000/phonebook';
  }
  return `http://localhost:8000/phonebook/${endpoint}`;
}

async function getData() {
  const data = await (await fetch(host())).json();

  return data;
}

function deleteEntry(id) {
  return fetch(host(id), {
    method: 'DELETE',
  });
}

async function createEntry(entry) {
  return (
    await fetch(host(), {
      method: 'POST',
      body: JSON.stringify(entry),
    })
  ).json();
}

// app logic
window.addEventListener('load', () => {
  const list = document.querySelector('#phonebook');
  const inputPerson = document.querySelector('#person');
  const inputPhone = document.querySelector('#phone');

  document.querySelector('#btnLoad').addEventListener('click', renderPhonebook);
  document.querySelector('#btnCreate').addEventListener('click', createContact);

  async function renderPhonebook() {
    const data = await getData();

    list.innerHTML = '';

    Object.entries(data).forEach(([id, entry]) => createElement(id, entry));
  }

  function createElement(id, entry) {
    const button = el('button', 'Delete');

    const element = el('li', [
      el('span', `${entry.person}: ${entry.phone}`),
      button,
    ]);

    button.addEventListener('click', async () => {
      try {
        await deleteEntry(id);
        element.remove();
      } catch (error) {
        alert(error.message);
        console.error(error);
      }
    });

    list.appendChild(element);
  }

  async function createContact() {
    const person = inputPerson.value;
    const phone = inputPhone.value;

    const entry = {
      person,
      phone,
    };

    const result = await createEntry(entry);
    const id = Object.keys(result)[0];

    createElement(id, result[id]);
  }
});
