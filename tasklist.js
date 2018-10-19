var mklist = function(tasks, deadlines, priority) {
var liElem = document.createElement('li');
liElem.textcontent=`${tasks} - ${deadlines}`;
liElem.classList.add('list-group-item')

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
    }
    )

    