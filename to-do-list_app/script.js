const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write a task!");
  } else {
    renderTask();
  }
  inputBox.value = "";
  saveData();
}

function renderTask() {
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";

  li.appendChild(span);
  listContainer.appendChild(li);
}

listContainer.addEventListener(
  "click",
  (event) => {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
    }
    saveData();
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
