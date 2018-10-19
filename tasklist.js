var mklist = function(tasks, deadlines, priority) {
var liElem = document.createElement('li');
liElem.textContent=`${tasks} - ${deadlines}`;
liElem.classList.add('list-group-item')


    if(priority =='high')
    liElem.classList.add('priority-high');

    else if (priority == 'medium') 
    liElem.classList.add('priority-medium');

    else 
    liElem.classList.add('priority-low');

    return(liElem)
}


var addbtn = document.querySelector('#addbtn');
addbtn.addEventListener(
    'click', 
    function() {
        var taskElem = document.querySelector('#task')
        var deadlineElem = document.querySelector('#deadline')
        var priorityElem = document.querySelector('#priority')
        //console.log('Task:', taskElem.value)
        //console.log('Due date:', deadlineElem.value)
        //console.log('Priority:', priorityElem.value)
       var todoElem = mklist(taskElem.value,deadlineElem.value,priorityElem.value)

       var todolistElem = document.querySelector('#todo-list');
       todolistElem.appendChild(todoElem);
       taskElem.value = null;
       deadlineElem.value = null;
       priorityElem.value = medium;


    }
    )

    