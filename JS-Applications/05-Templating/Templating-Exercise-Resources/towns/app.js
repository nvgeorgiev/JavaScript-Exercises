/*globals Handlebars */
window.addEventListener('load', () => {
  // load the template
  const templateString = document.getElementById('main-template').innerHTML;

  // compile the template
  const templateFn = Handlebars.compile(templateString);

  document
    .querySelector('#btnLoadTowns')
    .addEventListener('click', renderTowns);

  const input = document.querySelector('#towns');
  const rootEl = document.querySelector('#root');

  function renderTowns(e) {
    e.preventDefault();

    const towns = input.value.split(', ');

    // run the template with our data (variables)
    const generatedHtml = templateFn({ towns });

    // insert the generated HTML in the DOM
    rootEl.innerHTML = generatedHtml;
  }
});
