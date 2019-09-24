window.onload = function () {
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');

  btn.onclick = function () {
    if (txtArea.value.trim() != ""){
      addTask();
    }else{
      alert("Please enter the text of your task.");
    }
    
    txtArea.value = "";
  }
  // add task handler
  function addTask() {
    // add element to UI
    var taskContent = txtArea.value;
    var containerToDo = document.getElementById('container-to-do');
    var newTask = document.createElement('div');
    newTask.classList.add('new', 'checkbox');
    containerToDo.append(newTask);
    var label = document.createElement('label');
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    label.append(check);
    newTask.append(label);
    var text = document.createTextNode(taskContent);
    label.append(text);
    var icon = document.createElement('i');
    icon.classList.add('glyphicon', 'glyphicon-trash', 'icon');
    newTask.append(icon);

    txtArea.value = "";

    //mark task as completed
    check.onclick = function () {
      label.classList.toggle('completed');
    };

    //delete task
    icon.onclick = function (event) {
      event.currentTarget.closest("div.new").remove();
      //event.currentTarget.parentElement.remove();
    };

  }

  //handling Enter key
  document.querySelector('#textarea').addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      addTask();
    }
  })
// complete all handler 
  var completeAll = document.getElementById('complete-all');
  completeAll.onclick = function () {
    for (let index = 0; index < document.getElementsByClassName('new checkbox').length; index++) {
      document.getElementsByClassName('new checkbox')[index].firstChild.classList.toggle('completed');
    }
  };
  


  // TODO: filter tasks
  /*
    var filterShowAll = document.getElementById('filter-show-all');
    filterShowAll.onclick = function () {
      console.log('show all');
    };

    var filterShowCompleted = document.getElementById('filter-show-completed');
    filterShowCompleted.onclick = function () {
      console.log('show completed');
    };

    var filterShowCompleted = document.getElementById('filter-show-removed');
    filterShowRemoved.onclick = function () {
      console.log('show removed');
    };
  */
}
//stuff
// $(document).ready(function () {
//   var btn = $('#button');
//   // btn.prop("disabled", true);
//   var textarea = $('#textarea');



//   btn.click(function () {
//     addTask();
//     textarea.val('');
//   });

//   function addTask() {
//     var taskContent = textarea.val();
//     var containerToDo = $('#container-to-do');
//     var newTask = $('<div>');
//     newTask.addClass('new');
//     newTask.addClass('checkbox');
//     containerToDo.append(newTask);
//     var label = $('<label>');
//     var check = $('<input>');
//     check.attr('type', 'checkbox');
//     label.append(check);
//     newTask.append(label);
//     var text = $(document.createTextNode(taskContent));
//     label.append(text);
//     var icon = $('<i>');
//     icon.addClass('glyphicon glyphicon-trash icon');
//     newTask.append(icon);

//     textarea.val('')

//     check.click(function () {
//       labeledTask();
//     });

//     function labeledTask() {
//       label.toggleClass('completed');
//     }
//   }
// });