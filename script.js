const input = document.querySelector(".input-text");
const add = document.querySelector(".add-btn");
const list = document.querySelector("ul");

function saveTasks(){
  let tasks = []
  
  document.querySelectorAll("li").forEach(li =>{
    const checkbox = li.querySelector("input[type='checkbox']");
    const span = li.querySelector("span");

    tasks.push({
      text: span.textContent,
      checked: checkbox.checked
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task =>{
    addTask(task.text, task.checked);
  })
}

function addTask(text, completed = false){
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  checkbox.checked = completed;

  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("list-text");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () =>{
    li.remove();
    saveTasks()
  });

  checkbox.addEventListener("change", saveTasks);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  list.appendChild(li);
}

add.addEventListener("click", () =>{
  addTask(input.value);
  saveTasks();
  input.value = "";
});

document.addEventListener("DOMContentLoaded", loadTasks);
