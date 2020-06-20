function notify(message) {
  // намираме кутийката
  const notification = document.querySelector('#notification');

  // поставяме съобщението
  notification.textContent = message;

  // визуализираме
  notification.style.display = 'block';

  // активираме таймер, който след 2 сек да скрие кутийката
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
}
