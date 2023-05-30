document.querySelector('#button').onclick = function()
    {
        if(document.querySelector('#container input').value.length == 0)
        {
         alert('Do Enter task name!!!')
        }
        else
        {
         document.querySelector('#task').innerHTML += `
          <div class="tasks">

              <span id="taskname">
                     ${document.querySelector('#container input').value}
              </span>

             <button id="delete">
                  Delete
                  <i class="far fa-trash-alt"></i>
                </button>
               
                <br>
                <br>
          </div>
          `;
          var current_tasks = document.querySelectorAll('#delete');

        for(var i=0; i<current_tasks.length; i++)
        {
            current_tasks[i].onclick = function()
            {
                alert("Are you sure to delete the task!!!")
                
                this.parentNode.remove();
            }
        }
        }
        }