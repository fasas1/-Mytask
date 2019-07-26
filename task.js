const form = document.querySelector('#add-task')
const taskInput = document.querySelector('#tasker')
const taskList = document.querySelector('#task-layout')
const  hideBar = document.querySelector('#hide')
const filter = document.querySelector('#filter-task')

  
//  adding an event listener for form
form.addEventListener('submit', function(e){
   if(taskInput.value === '')
     alert('inputname');
     const value = form.querySelector('#tasker').value;

  // create li element
  const li = document.createElement('li');
  taskName = document.createElement('span');
  deleteBtn = document.createElement('delete');

// add content
taskName.textContent = value;
deleteBtn.textContent ='delete';

// add class
 taskName.className = 'name';
 deleteBtn.className = 'delete';

// append li element
 li.appendChild(taskName);
 li.appendChild(deleteBtn);
 taskList.appendChild(li);

   //clear text input
 taskInput.value = ''
 e.preventDefault();
});

// eventlistener for filter
  filter.addEventListener('keyup',function(e){
     const text = e.target.value.toLowerCase() 
      document.querySelectorAll('#task-layout').forEach(function(tasker){
         const item = tasker.firstChild.textContent
         if(item.toLowerCase().indexOf(text)!= ''){
           taskList.style.display = 'block';
         }else{
           taskList.style.display = 'none';
         }
      })
      // console.log(text)
  })


 //eventListener for task list
 taskList.addEventListener('click',function(e){
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove()
  }
 e.preventDefault();
})

// event listener for hideBar
  hideBar.addEventListener('click',function(e){
     if ( hideBar.checked ){
       taskList.style.display = 'none';
     }else{
     taskList.style.display = 'block';
    }
   }) 

  

