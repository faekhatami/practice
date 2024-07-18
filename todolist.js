function addTask() {
  const taskInput = document.getElementById("newTask");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    taskList.removeChild(listItem);
  };

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.onclick = () => {
    listItem.style.textDecoration = "line-through";
  };

  listItem.appendChild(deleteButton);
  listItem.appendChild(completeButton);
  taskList.appendChild(listItem);

  taskInput.value = "";
}
