const serverUrl = "http://localhost:3500";

const server = {
  getTasks: async () => {
    return await sendRequest("tasks");
  },
  addTask: async (data) => {
    return await sendRequest("add-task", data);
  },
  removeTask: async (id) => {
    return await sendRequest(`remove-task/${id}`);
  },
  getTask: async (id) => {
    return await sendRequest(`task/${id}`);
  },
  uploadStatus: async (id) => {
    return await sendRequest(`status/${id}`);
  },
};

async function sendRequest(path, data = {}) {
  let options = { method: "GET" };
  if (Object.keys(data).length !== 0) {
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  }
  try {
    const response = await fetch(`${serverUrl}/${path}`, options);

    // Проверка статуса ответа
    if (!response.ok) {
      throw new Error("Ошибка HTTP: " + response.status);
    }
    // console.log(response);
    return await response.json();
  } catch (error) {
    console.error("Произошла ошибка:", error);
    throw error; // Перебросить ошибку для обработки в вызывающем коде, если это необходимо
  }
}

export default server;
