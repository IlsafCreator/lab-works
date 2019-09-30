window.onload = function () {
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');

  btn.onclick = function () {
    if (txtArea.value.trim() != ""){
      addTask();
    }else{
      alert('Please enter the text of your task.');
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
    label.classList.add('task-label');
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList.add('task-checkbox');
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
      if (!event.currentTarget.closest('div.new').classList.contains('deleted')) {
        event.currentTarget.closest('div.new').style.display = 'none';
      }
      event.currentTarget.closest('div.new').classList.add('deleted');
      //event.currentTarget.closest('div.new').remove();
    };
    document.getElementById('complete-all').classList.remove('active');
  }

  //handling Enter key
  document.querySelector('#textarea').addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      if (txtArea.value.trim() != ""){
        addTask();
      }else{
        alert('Please enter the text of your task.');
      }
      
      txtArea.value = "";
    }
  })

  

  // complete all handler 
  var completeAll = document.getElementById('complete-all');
  completeAll.onclick = function () {
    var taskList = document.getElementsByClassName('new checkbox');

    for (let index = 0; index < taskList.length; index++) {
      var taskLabel = taskList[index].querySelector('.task-label')
      var taskCheckbox = taskList[index].querySelector('.task-checkbox');

      if (!taskList[index].classList.contains('deleted') && completeAll.checked) {
        taskLabel.classList.add('completed');
        taskCheckbox.checked = true;
        //console.log(1);
      } else {
        taskLabel.classList.remove('completed');
        taskCheckbox.checked = false;
        //console.log(0);
      }

      taskCheckbox.onclick = function (event) {
        completeAll.checked = false;

        if (event.target.closest('.task-label').classList.contains('completed')) {
          event.target.closest('.task-label').classList.remove('completed');
        } else {
          event.target.closest('.task-label').classList.add('completed');
        }
      }
    }
  };
  
    //show all filter
    var filterShowAll = document.getElementById('filter-show-all');
    filterShowAll.onclick = function () {
      var taskList = document.getElementsByClassName('new checkbox');
      for (let index = 0; index < taskList.length; index++) {
        if (!taskList[index].classList.contains('deleted')){
          taskList[index].style.display = 'block';
        }else{
          taskList[index].style.display = 'none';
        }
      }
     // console.log('show all');
    };

    //show completed filter
    var filterShowCompleted = document.getElementById('filter-show-completed');
    filterShowCompleted.onclick = function () {
      var taskList = document.getElementsByClassName('new checkbox');
      for (let index = 0; index < taskList.length; index++) {
        if(!taskList[index].classList.contains('deleted')&&taskList[index].classList.contains('completed')){
          taskList[index].style.display = 'block';
        }else{
          taskList[index].style.display = 'none';
        }
      }
      //console.log('show completed');
    };

    //show removed filter
    var filterShowRemoved = document.getElementById('filter-show-removed');
    filterShowRemoved.onclick = function () {
      var taskList = document.getElementsByClassName('new checkbox');

      for (let index = 0; index < taskList.length; index++) {
        if (taskList[index].classList.contains('deleted')){
          taskList[index].style.display = 'block';
        }else{
          taskList[index].style.display = 'none';
        }
      }
      //console.log('show removed');
    };

    //show active filter
    var filterShowActive = document.getElementById('filter-show-active');
    filterShowActive.onclick = function () {
      console.log('show active');
    };
  
}