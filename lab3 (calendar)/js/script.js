window.onload = function () {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDate();

  switch (currentMonth) {
    case 0:
      document.querySelector('.current-month').textContent = 'January ';
      break;
    case 1:
      document.querySelector('.current-month').textContent = 'February ';
      break;
    case 2:
      document.querySelector('.current-month').textContent = 'March ';
      break;
    case 3:
      document.querySelector('.current-month').textContent = 'April ';
      break;
    case 4:
      document.querySelector('.current-month').textContent = 'May ';
      break;
    case 5:
      document.querySelector('.current-month').textContent = 'June ';
      break;
    case 6:
      document.querySelector('.current-month').textContent = 'July ';
      break;
    case 7:
      document.querySelector('.current-month').textContent = 'August ';
      break;
    case 8:
      document.querySelector('.current-month').textContent = 'September ';
      break;
    case 9:
      document.querySelector('.current-month').textContent = 'October ';
      break;
    case 10:
      document.querySelector('.current-month').textContent = 'November';
      break;
    case 11:
      document.querySelector('.current-month').textContent = 'December';
      break;
    default:
      break;
  }
  document.querySelector('.current-year').textContent = currentYear;

  var cellsArray = document.querySelectorAll('.day');
  for (let index = 0; index < cellsArray.length; index++) {
    if ((parseInt(cellsArray[index].textContent, 10) === currentDay) && (!cellsArray[index]
      .parentElement.classList.contains('another-month'))) {
      cellsArray[index].classList.toggle('current-day');
    }
  }

  var switchTheme = document.querySelector('#theme-switch-box');
  var switchLabel = document.querySelector('.switch-label');
  switchTheme.onclick = function () {
    var calendarApp = document.querySelector('.calendar-app');
    calendarApp.classList.toggle('dark-mode');
    if (switchLabel.textContent === 'Light Theme') {
      switchLabel.textContent = 'Dark Theme';
    } else {
      switchLabel.textContent = 'Light Theme';
    }
  }
}
