document.addEventListener("DOMContentLoaded", function() {

  const addBtn = document.getElementById("add-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function() {
  localStorage.removeItem("tasks");
  taskList.innerHTML = "";
});


  // Load saved tasks
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(addTaskToList);

  addBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    addTaskToList(taskText);
    saveTask(taskText);
    taskInput.value = "";
  });

  function addTaskToList(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    // mark as completed when clicked
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(e) {
      e.stopPropagation(); // prevent marking complete when deleting
      taskList.removeChild(li);
      removeTask(taskText);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
