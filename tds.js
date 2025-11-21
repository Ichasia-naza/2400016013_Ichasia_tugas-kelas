const bgColorSelect = document.getElementById("bg-color-select");

bgColorSelect.addEventListener("change", function () {
  const selectedColor = this.value; 
  if (selectedColor) {
    document.body.style.backgroundColor = selectedColor;
  }
});

const fontFamilySelect = document.getElementById("font-family-select");

fontFamilySelect.addEventListener("change", function () {
  const selectedFont = this.value;
  if (selectedFont) {
    document.body.style.fontFamily = selectedFont;
  }
});

const increaseBtn = document.getElementById("font-size-increase");
const decreaseBtn = document.getElementById("font-size-decrease");

let currentFontSize = 16; 

increaseBtn.addEventListener("click", function () {
  currentFontSize += 2; 
  document.body.style.fontSize = currentFontSize + "px";
});

decreaseBtn.addEventListener("click", function () {
  if (currentFontSize > 8) { 
    currentFontSize -= 2; 
    document.body.style.fontSize = currentFontSize + "px";
  }
});

const darkModeToggle = document.getElementById("dark-mode-toggle");
let darkMode = false;

darkModeToggle.addEventListener("click", function () {
  darkMode = !darkMode; 
  
  if (darkMode) {
    document.body.style.backgroundColor = "#121212"; 
    document.body.style.color = "white"; 
  } else {
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black";
  }
});

function addTask() {
  const input = document.getElementById("newTask");
  const taskList = document.getElementById("taskList");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.className = "edit";
  editBtn.onclick = function () {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "❌";
  closeBtn.className = "close";
  closeBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(closeBtn);
  taskList.appendChild(li);

  input.value = "";
}