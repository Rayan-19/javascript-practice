const openTaskFormBtn=document.getElementById('open-task-form-btn')
const taskFormContainer=document.getElementById('task-form')
const addOrUpdateTaskBtn=document.getElementById('add-or-update-task-btn')
const taskContainer=document.getElementById('tasks-container')
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");

const titleInput=document.getElementById('title-input')
const dateInput=document.getElementById('date-input')
const descriptionInput=document.getElementById('description-input')

const data = JSON.parse(localStorage.getItem('DATA')) || [];

let currentDataIndex=null

if(data.length!==-1){
    renderData()
}

openTaskFormBtn.addEventListener('click',()=>{
    taskFormContainer.classList.remove('hidden')
})
addOrUpdateTaskBtn.addEventListener('click',()=>{
    const taskData={
     id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
     title: titleInput.value,
     date: dateInput.value,
     description: descriptionInput.value
    }
    const isDuplicate = data.some(item =>
        item.title === taskData.title &&
        item.date === taskData.date &&
        item.description === taskData.description
    );

    if (isDuplicate) {
        alert("This task already exists. Please enter a different task.");
        return;
    }
 
    if(currentDataIndex === null){
       data.push(taskData);  // Add new task
    } else {
       data[currentDataIndex] = taskData;  // Update existing task
    }
 
    localStorage.setItem('DATA', JSON.stringify(data));
    renderData();
    reset();
 });
 

 function renderData(){
    taskContainer.innerHTML = data.map(({id, title, date, description}) => {
        return `<div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTas k('${id}')" type="button" class="btn">Edit</button>
          <button onclick="deleteTask('${id}')" type="button" class="btn">Delete</button>
        </div>`;
    }).join('');  // Join the array into a single string
}
function reset(){
    titleInput.value=''
    dateInput.value=''
    descriptionInput.value=''
    currentDataIndex=null
    taskFormContainer.classList.add('hidden')
}

function deleteTask(id){
    const deletingIndex=data.findIndex((item)=>item.id===id)
    data.splice(deletingIndex, 1);  // Remove the item from the array
    localStorage.setItem('DATA', JSON.stringify(data));
    renderData();
}

function editTask(id){
    taskFormContainer.classList.remove('hidden')
    const editingIndex = data.findIndex((item) => item.id === id);
    const editingItem = data[editingIndex];
    currentDataIndex = editingIndex;
    titleInput.value = editingItem.title;
    dateInput.value = editingItem.date;
    descriptionInput.value = editingItem.description;
}

closeTaskFormBtn.addEventListener('click',()=>{
    if (titleInput.value||dateInput.value||descriptionInput.value){
        confirmCloseDialog.showModal();
   }
   else{
    reset()
   }
})
cancelBtn.addEventListener('click',()=>{
    confirmCloseDialog.close()
})
discardBtn.addEventListener('click',()=>{
    confirmCloseDialog.close()
    reset()
})


