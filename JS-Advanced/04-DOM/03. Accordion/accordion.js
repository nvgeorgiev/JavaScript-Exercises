function toggle() {
  // намираме референция
  const div = document.querySelector('#extra');
  const btn = document.querySelectorAll('.button')[0];
  if (div.style.display === 'block') {
    // ако е видим, скриваме и изписваме More
    btn.textContent = 'More';
    div.style.display = 'none';
  } else {
    // иначе го показваме и изписваме Less
    btn.textContent = 'Less';
    div.style.display = 'block';
  }
}
