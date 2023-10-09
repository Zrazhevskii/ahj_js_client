const tasks = require("./tasks.js").default;
const common = require("./common.js").default;

const container = document.getElementById("tasks"),
  modal = document.getElementById("delete-task-modal"),
  resetButton = document.getElementById("task-delete-reset"),
  confirmButton = document.getElementById("task-delete-confirm");

var taskId;

container.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.classList.contains("delet")) {
    taskId = event.target.getAttribute("data-task");
    common.openModal(modal);
  }
});

confirmButton.addEventListener("click", function () {
  tasks.removeTask(taskId);
  common.closeModal(modal);
});

resetButton.addEventListener("click", function () {
  common.closeModal(modal);
});
