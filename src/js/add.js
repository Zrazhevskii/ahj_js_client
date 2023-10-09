const tasks = require("./tasks.js").default;
const common = require("./common").default;

const addTaskButton = document.getElementById("add-task"),
  modal = document.getElementById("add-task-modal"),
  modalTitle = modal.querySelector(".title"),
  shortDescription = document.getElementById("short-task-description"),
  fullDescription = document.getElementById("full-task-description"),
  taskIdInput = document.getElementById("task-id"),
  resetButton = document.getElementById("task-reset"),
  submitButton = document.getElementById("task-submit"),
  container = document.getElementById("tasks");


addTaskButton.addEventListener("click", function () {
  modalTitle.textContent = "Добавить задачу?";
  resetFields();
  common.openModal(modal);
});

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (!shortDescription.value || !fullDescription.value) {
    return;
  }

  tasks.addTask({
    id: taskIdInput.value,
    shortDescription: shortDescription.value,
    fullDescription: fullDescription.value,
  });

  common.closeModal(modal);
});

resetButton.addEventListener("click", function () {
  resetFields();
  common.closeModal(modal);
});

container.addEventListener("click", function (event) {
  if (event.target.classList.contains("change")) {
    let taskId = event.target.getAttribute("data-task");
    tasks.getTask(taskId).then((data) => {
      shortDescription.value = data.name;
      fullDescription.value = data.description;
      taskIdInput.value = data.id;

      modalTitle.textContent = "Изменить задачу?";
      common.openModal(modal);
    });
  }
  if (event.target.classList.contains("status")) {
    let taskId = event.target.getAttribute("data-task");
    tasks.uploadStatus(taskId)
  }
});

function resetFields() {
  taskIdInput.value = "";
  shortDescription.value = "";
  fullDescription.value = "";
}
