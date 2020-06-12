function createArticle() {
  const createTitleInput = document.getElementById('createTitle');
  const createContentTextArea = document.getElementById('createContent');
  const articleSection = document.getElementById('articles');

  const newArticle = document.createElement('article');
  const articleHeading = document.createElement('h3');
  const articleParagraph = document.createElement('p');

  if (createTitleInput.value !== '' && createContentTextArea.value !== '') {
    newArticle.appendChild(articleHeading);
    newArticle.appendChild(articleParagraph);

    articleSection.appendChild(newArticle);

    articleHeading.innerHTML = createTitleInput.value;
    articleParagraph.innerHTML = createContentTextArea.value;
  }

  createTitleInput.value = '';
  createContentTextArea.value = '';
}
