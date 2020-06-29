var text = document.getElementById('TaskName');
var btn = document.getElementById('ADDBTN');
var tasks = document.getElementById('myTaskList');


btn.onclick = listofItems;

// prepend new tasks in main task list
function listofItems() {
    // check box, deleyebutton and text element creations
    var newItem = document.createElement('li');
    var itemText = document.createElement('p');
    itemText.textContent = text.value;

    var itemButton = document.createElement('button');
    itemButton.textContent = 'Delete Task';

    var itemCHeckBox = document.createElement('input');
    itemCHeckBox.setAttribute('type', 'checkbox')
    // onclick to call taskComplete funciton
    itemCHeckBox.onclick = taskCompleted;
    // adding to a new list item to add to main list
    newItem.appendChild(itemCHeckBox);
    newItem.appendChild(itemText);
    newItem.appendChild(itemButton);
    // onlclick calling funciton remove task
    itemButton.onclick = removeTask;

    // append ont op of the list
    tasks.prepend(newItem);

}

function taskCompleted(evnt) {
    // get parent item
    var t = evnt.target.parentNode;
    // select p tag and add line-through i it
    t.querySelector('p').style.textDecoration = 'line-through';
    // move task to last
    t.parentNode.appendChild(t);
}

function removeTask(evnt) {
    // get task
    var t = evnt.target.parentNode;
    // remove task from list
    t.parentNode.removeChild(t);
}