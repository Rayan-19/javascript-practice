// const taskForm = document.getElementById("task-form");
// const confirmCloseDialog = document.getElementById("confirm-close-dialog");
// const openTaskFormBtn = document.getElementById("open-task-form-btn");
// const closeTaskFormBtn = document.getElementById("close-task-form-btn");
// const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
// const cancelBtn = document.getElementById("cancel-btn");
// const discardBtn = document.getElementById("discard-btn");
// const tasksContainer = document.getElementById("tasks-container");
// const titleInput = document.getElementById("title-input");
// const dateInput = document.getElementById("date-input");
// const descriptionInput = document.getElementById("description-input");

// const taskData = JSON.parse(localStorage.getItem("data")) || [];   
// let currentTask = {};
// const addOrUpdateTask = () => {
//   const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
//   const taskObj = {
//     id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
//     title: titleInput.value,
//     date: dateInput.value,
//     description: descriptionInput.value,
//   };

//   if (dataArrIndex === -1) {
//     taskData.unshift(taskObj);
//   } else {
//     taskData[dataArrIndex] = taskObj;
//   }

//   localStorage.setItem("data", JSON.stringify(taskData));
//   updateTaskContainer()
//   reset()
// };

// const updateTaskContainer = () => {
//   tasksContainer.innerHTML = "";

//   taskData.forEach(
//     ({ id, title, date, description }) => {
//         (tasksContainer.innerHTML += `
//         <div class="task" id="${id}">
//           <p><strong>Title:</strong> ${title}</p>
//           <p><strong>Date:</strong> ${date}</p>
//           <p><strong>Description:</strong> ${description}</p>
//           <button onclick="editTask(this)" type="button" class="btn">Edit</button>
//           <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
//         </div>
//       `)
//     }
//   );
// };


// const deleteTask = (buttonEl) => {
//   const dataArrIndex = taskData.findIndex(
//     (item) => item.id === buttonEl.parentElement.id
//   );

//   buttonEl.parentElement.remove();
//   taskData.splice(dataArrIndex, 1);
//   localStorage.setItem("data", JSON.stringify(taskData));
// }

// const editTask = (buttonEl) => {
//     const dataArrIndex = taskData.findIndex(
//     (item) => item.id === buttonEl.parentElement.id
//   );

//   currentTask = taskData[dataArrIndex];

//   titleInput.value = currentTask.title;
//   dateInput.value = currentTask.date;
//   descriptionInput.value = currentTask.description;

//   addOrUpdateTaskBtn.innerText = "Update Task";

//   taskForm.classList.toggle("hidden");  
// }

// const reset = () => {
// addOrUpdateTaskBtn.innerText="Add Task"
//   titleInput.value = "";
//   dateInput.value = "";
//   descriptionInput.value = "";
//   taskForm.classList.toggle("hidden");
//   currentTask = {};
// }

// if (taskData.length) {
//   updateTaskContainer();
// }

// openTaskFormBtn.addEventListener("click", () =>
//   taskForm.classList.toggle("hidden")
// );

// closeTaskFormBtn.addEventListener("click", () => {
//   const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
//   const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;

//   if (formInputsContainValues && formInputValuesUpdated) {
//     confirmCloseDialog.showModal();
//   } else {
//     reset();
//   }
// });

// cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

// discardBtn.addEventListener("click", () => {
//   confirmCloseDialog.close();
//   reset()
// });

// taskForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   addOrUpdateTask();
// });

const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

let taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTaskId = null;

const renderTasks = () => {
  tasksContainer.innerHTML = taskData.map(({ id, title, date, description }) => `
    <div class="task" id="${id}">
      <p><strong>Title:</strong> ${title}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Description:</strong> ${description}</p>
      <button onclick="editTask('${id}')" class="btn">Edit</button>
      <button onclick="deleteTask('${id}')" class="btn">Delete</button>
    </div>
  `).join('');
};

const saveTask = () => {
  const task = {
    id: currentTaskId || `${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (currentTaskId) {
    taskData = taskData.map(t => t.id === currentTaskId ? task : t);
  } else {
    taskData.unshift(task);
  }

  localStorage.setItem("data", JSON.stringify(taskData));
  resetForm();
  renderTasks();
};

const deleteTask = (id) => {
  taskData = taskData.filter(task => task.id !== id);
  localStorage.setItem("data", JSON.stringify(taskData));
  renderTasks();
};

const editTask = (id) => {
  const task = taskData.find(task => task.id === id);
  titleInput.value = task.title;
  dateInput.value = task.date;
  descriptionInput.value = task.description;
  currentTaskId = task.id;
  addOrUpdateTaskBtn.textContent = "Update Task";
  taskForm.classList.remove("hidden");
};

const resetForm = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  currentTaskId = null;
  addOrUpdateTaskBtn.textContent = "Add Task";
  taskForm.classList.add("hidden");
};

openTaskFormBtn.addEventListener("click", () => taskForm.classList.toggle("hidden"));

closeTaskFormBtn.addEventListener("click", () => {
  if (titleInput.value || dateInput.value || descriptionInput.value) {
    confirmCloseDialog.showModal();
  } else {
    resetForm();
  }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  resetForm();
});

addOrUpdateTaskBtn.addEventListener("click", saveTask);

if (taskData.length) renderTasks();

