window.onload = function () {
  var switchTheme = document.querySelector('#theme-switch-box');
  var switchLabel = document.querySelector('.switch-label');
  switchTheme.onclick = function () {
    var calendarApp = document.querySelector('.calendar-app');
    calendarApp.classList.toggle('dark-mode');
    if (switchLabel.textContent == 'Light Theme') {
      switchLabel.textContent = 'Dark Theme';
    } else {
      switchLabel.textContent = 'Light Theme';
    }
  }
}
