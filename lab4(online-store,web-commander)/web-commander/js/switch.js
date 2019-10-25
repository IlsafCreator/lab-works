window.onload = function() {
  let elementRows = document.querySelectorAll('.element-row');

  for (let index = 0; index < elementRows.length; index++) {
    const element = elementRows[index];
    element.onclick = function (event) {
      console.log("aw");
    };
  }
}
