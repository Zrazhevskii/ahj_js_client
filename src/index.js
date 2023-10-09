require("./css/style.css");
require("./js/add");
require("./js/delete");

const tasks = require("./js/tasks.js").default;

(function init() {
  tasks.updateTasks();
})();
