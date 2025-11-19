const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


// Load tasks from localStorage on startup
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


function saveTasks() {
localStorage.setItem('tasks', JSON.stringify(tasks));
}


function renderTasks() {
taskList.innerHTML = '';


tasks.forEach((task, index) => {
const li = document.createElement('li');


const textSpan = document.createElement('span');
textSpan.textContent = task;


const editBtn = document.createElement('button');
editBtn.textContent = 'Edit';
editBtn.className = 'editBtn';


const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.className = 'deleteBtn';


// EDIT functionality
editBtn.addEventListener('click', () => {
const newTask = prompt('Edit your task:', task);
if (newTask !== null && newTask.trim() !== '') {
tasks[index] = newTask;
saveTasks();
renderTasks();
}
});


// DELETE functionality
deleteBtn.addEventListener('click', () => {
tasks.splice(index, 1);
saveTasks();
renderTasks();
});


li.appendChild(textSpan);
li.appendChild(editBtn);
li.appendChild(deleteBtn);


taskList.appendChild(li);
});
}


// ADD button functionality
addBtn.addEventListener('click', () => {
const task = input.value.trim();
if (task !== '') {
tasks.push(task);
saveTasks();
renderTasks();
input.value = '';
}
});


// Allow Enter key to add task
input.addEventListener('keypress', (e) => {
if (e.key === 'Enter') addBtn.click();
});


// Initial render on page load
renderTasks();