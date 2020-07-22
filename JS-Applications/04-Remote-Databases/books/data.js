const appId = 'D5B7917B-9AD4-66E1-FF29-EA1C9955BA00';
const apiKey = 'BC044B7F-331F-4970-9D89-50D74B731F27';

function host(endpoint) {
  return `https://api.backendless.com/${appId}/${apiKey}/data/${endpoint}`;
}

export async function getBooks() {
  const response = await fetch(host('books'));
  const data = await response.json();
  return data;
}

export async function createBook(book) {
  const response = await fetch(host('books'), {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
}

export async function updateBook(book) {
  const id = book.objectId;
  const response = await fetch(host('books/' + id), {
    method: 'PUT',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
}

export async function deleteBook(id) {
  const response = await fetch(host('books/' + id), {
    method: 'DELETE',
  });
  const data = await response.json();

  return data;
}
