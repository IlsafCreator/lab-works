window.onload = function() {
  let directoryRows = document.querySelectorAll('.directory-row');

  for (let index = 0; index < directoryRows.length; index++) {
    const element = directoryRows[index];
    element.onclick = function (event) {
      console.log("aw");
    };
  }
  
  // for (let row of rows) {
  //   row.onclick = function (event) {
  //     // console.log(row.innerText);
  //     console.log(event.target.parentElement.rowIndex);
  //     if (event.target.parentElement.rowIndex === row.rowIndex) {
  //       row.classList.add('selected');
  //     } else {
  //       row.classList.remove('selected');
  //     }
  //   };
  // }
}
