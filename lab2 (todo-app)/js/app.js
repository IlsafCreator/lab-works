
window.onload = function(){
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');

  btn.onclick=function(){
    addTask();
    txtArea.value="";
  }
  
  function addTask() {
    var taskContent = txtArea.value;
    var containerToDo = document.getElementById('container-to-do');
    var newTask = document.createElement('div');
    newTask.classList.add('new','checkbox');
    containerToDo.append(newTask);
    var label = document.createElement('label');
    var check = document.createElement('input');
    check.setAttribute('type','checkbox');
    label.append(check);
    newTask.append(label);
    var text = document.createTextNode(taskContent);
    label.append(text);
    var icon = document.createElement('i');
    icon.classList.add('glyphicon', 'glyphicon-trash', 'icon');
    newTask.append(icon);

    txtArea.value="";

    check.onclick=function(){
      labeledTask();
    }

    function labeledTask(){
      label.classList.toggle('labeled');
    }
  }

}

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
//       label.toggleClass('labeled');
//     }
//   }
// });