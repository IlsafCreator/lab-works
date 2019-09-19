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
// TODO: complete all handler here
  /*
    var completeAll = document.getElementById('complete-all');
    completeAll.onclick = function () {
      console.log('complete all');
    };
  */


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