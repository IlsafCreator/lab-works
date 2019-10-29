window.onload = function () {

  let currentPage = document.querySelector('.catalog.left-catalog');

  currentIndex = -1;

  document.addEventListener('keydown', function (eventParent) {

    let currentPageElements = currentPage.children;

    //key down
    if (eventParent.keyCode === 40 && currentIndex < currentPageElements.length && (currentIndex < currentPageElements.length - 1)) {
      if (currentIndex + 1 < currentPageElements.length) {
        currentIndex += 1;
      }

      // console.log('Текущий индекс', currentIndex);

      currentPageElements[currentIndex].classList.toggle('selected');
      if (currentIndex > 0) {
        currentPageElements[currentIndex - 1].classList.toggle('selected');
      }
    }
    //key up
    if (eventParent.keyCode === 38 && currentIndex > 0) {
      currentIndex -= 1;
      currentPageElements[currentIndex + 1].classList.toggle('selected');
      currentPageElements[currentIndex].classList.toggle('selected');
    }

    //key right
    if (event.keyCode === 39) {
      currentPageElements[currentIndex].classList.toggle('selected');
      currentPage = document.querySelector('.catalog.right-catalog');
      currentPage.classList.toggle("current-catalog");
      document.querySelector('.catalog.left-catalog').classList.toggle("current-catalog");
      // console.log("нажата клавиша вправо");
      currentIndex = -1;
    }
    //key left
    if (event.keyCode === 37) {
      currentPageElements[currentIndex].classList.toggle('selected');
      currentPage = document.querySelector('.catalog.left-catalog');
      currentPage.classList.toggle("current-catalog");
      document.querySelector('.catalog.right-catalog').classList.toggle("current-catalog");
      // console.log("нажата клавиша влево");
      currentIndex = -1;
    }
  });
}