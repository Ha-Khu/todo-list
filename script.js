const input = document.querySelector(".input-text");
const add = document.querySelector(".add-btn");
const list = document.querySelector("ul");

add.addEventListener("click", () =>{
  let inputValue = input.value;
  
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const span = document.createElement("span");
  span.textContent = inputValue;
  span.classList.add("list-text");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () =>{
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  list.appendChild(li);

  input.value = "";

});
