const server = require("./server.js").default;
const container = document.getElementById("tasks");
const tasks = {
  updateTasks: async () => {
    await server.getTasks().then((tasks) => {
      container.innerHTML = "";
      tasks.forEach((item) => {
        let status = item.status ? `✔` : "";
        let task = `
                  <div class="task" id="task-${item.id}">
                    <button class="status" data-task=${item.id}>${status}</button>
                    <p class="short-description">${item.name}</p>
                    <p class="time">${item.created}</p>
                    <button class="redaction change" data-task=${item.id}>✎</button>
                    <button class="delet del" data-task=${item.id}>&#10006;</button>
                  </div>`;

        container.insertAdjacentHTML("beforeend", task);
      });
    });
  },
  addTask: (data) => {
    server.addTask(data).then(() => {
      tasks.updateTasks();
    });
  },
  removeTask: async (id) => {
    server.removeTask(id).then(() => {
      tasks.updateTasks();
    });
  },
  getTask: (id) => {
    return server.getTask(id);
  },
  uploadStatus: (id) => {
    server.uploadStatus(id).then(() => {
      tasks.updateTasks();
    });
  },
};

export default tasks;
