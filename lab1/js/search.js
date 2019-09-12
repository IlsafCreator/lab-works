//searching function
function searching(){
  //getting searching query from input field in lowercase 
  searchQuery = document.getElementById('searchField').value.toLowerCase();

  for (var i = 0; i < document.getElementsByClassName('content').length;i++){
    //getting text content from div, removing the leading and trailing white space and line terminator characters and make text in lowercase
    cardText = document.getElementsByClassName('content')[i].textContent.trim().toLowerCase();

    if (searchQuery !== ''){
      if (cardText.indexOf(searchQuery)!=-1){
        document.getElementsByClassName('column')[i].style.display='block';
      } else {
        document.getElementsByClassName('column')[i].style.display='none';
      }
    }else{
      document.getElementsByClassName('column')[i].style.display='block';
    }
  }
}

document.querySelector('#searchField').addEventListener('keydown',function(event){
  if (event.keyCode === 13) {
    searching();
  }
})

document.getElementById('searchButton').onclick=searching;