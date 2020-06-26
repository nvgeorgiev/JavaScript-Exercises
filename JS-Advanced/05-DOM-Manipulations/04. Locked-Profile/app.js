function lockedProfile() {
  // закачаме eventHandlers
  document.querySelector('main').addEventListener('click', onClick);

  function onClick(e) {
    // проверяваме дали е натиснат бутон
    if (e.target.nodeName === 'BUTTON') {
      // намираме родителя на бутона
      const parent = e.target.parentNode;
      // в него намираме ключалката -> ако е заключена, прекратяваме изпълнение
      const lock = parent.querySelector('input[type="radio"][value="lock"]');
      if (lock.checked) {
        return;
      }

      // в него намираме скритото поле
      const hiddenFields = [...parent.querySelectorAll('div')].filter((d) =>
        d.id.includes('HiddenFields')
      )[0];
      if (hiddenFields.style.display !== 'block') {
        // ако е невидимо -> показваме Hide it
        hiddenFields.style.display = 'block';
        e.target.textContent = 'Hide it';
      } else {
        // иначе -> скриваме и изписваме Show more
        hiddenFields.style.display = 'none';
        e.target.textContent = 'Show more';
      }
    }
  }
}
