//search function
function search() {
  //getting search query from input field in lowercase 
  var searchQuery = document.getElementById('searchField').value.toLowerCase();

  for (var i = 0; i < document.getElementsByClassName('content').length; i++) {
    //getting text content from div, removing the leading and trailing white space and line terminator characters and make text in lowercase
    var cardText = document.getElementsByClassName('content')[i].textContent.trim().toLowerCase();

    if (searchQuery !== '') {
      if (cardText.indexOf(searchQuery) <= -1) {
        document.getElementsByClassName('column')[i].style.display = 'none';
      }
    }else{
      document.getElementsByClassName('column')[i].style.display = 'block';
    }

    // if (searchQuery !== '') {
    //   if (cardText.indexOf(searchQuery) != -1) {
    //     document.getElementsByClassName('column')[i].style.display = 'block';
    //   } else {
    //     document.getElementsByClassName('column')[i].style.display = 'none';
    //   }
    // } else {
    //   document.getElementsByClassName('column')[i].style.display = 'block';
    // }
  }
}

document.querySelector('#searchField').addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    search();
  }
})

document.getElementById('searchButton').onclick = search;