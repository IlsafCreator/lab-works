let webCommanderUI = {
  currentIndex: 0,
  currentCatalog: document.querySelector('.catalog.left-catalog'),
  currentPageElements: document.querySelector('.catalog.left-catalog').children,
  quantity: 0,

  moveSelection: function () {
    for (let i = 0; i < this.currentPageElements.length; i++) {
      if (i == this.currentIndex) {
        this.currentPageElements[i].classList.add('selected');
      } else {
        this.currentPageElements[i].classList.remove('selected');
      }
    }
  },

  clearSelection: function () {
    for (let i = 0; i < this.currentPageElements.length; i++) {
      this.currentPageElements[i].classList.remove('selected');
    }
  },

  create: function () {
    this.quantity = this.currentPageElements.length;

    this.moveSelection();
    document.addEventListener('keydown', function (event) {
      //key down
      if (event.keyCode === 40) {
        if (this.currentIndex < this.quantity - 1) {
          this.currentIndex += 1;
          this.moveSelection();
        }
      }

      // key up
      if (event.keyCode === 38) {
        if (this.currentIndex > 0) {
          this.currentIndex -= 1;
          this.moveSelection();
        }
      }

      // key right
      if (event.keyCode === 39) {
        this.clearSelection();
        this.currentIndex = 0;
        this.currentCatalog = document.querySelector('.catalog.right-catalog');
        if (!this.currentCatalog.classList.contains('current-catalog')) {
          this.currentCatalog.classList.add('current-catalog');
          document.querySelector('.catalog.left-catalog').classList.remove('current-catalog');
        }
        this.currentPageElements = document.querySelector('.catalog.right-catalog').children;
        this.quantity = this.currentPageElements.length;
        this.moveSelection();
      }

      // key left
      if (event.keyCode === 37) {
        this.clearSelection();
        this.currentIndex = 0;
        this.currentCatalog = document.querySelector('.catalog.left-catalog');
        if (!this.currentCatalog.classList.contains('current-catalog')) {
          this.currentCatalog.classList.add('current-catalog');
          document.querySelector('.catalog.right-catalog').classList.remove('current-catalog');
        }
        this.currentPageElements = document.querySelector('.catalog.left-catalog').children;
        this.quantity = this.currentPageElements.length;
        this.moveSelection();
        // console.log('Left tab active');
      }
    }.bind(this));
  }
};

window.onload = function () {
  webCommanderUI.create();
}