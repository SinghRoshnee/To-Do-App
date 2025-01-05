import { tasks } from "./tasks.js";
import { renderTask } from "./rendertask.js";

const taskForm = document.querySelector("#task-form");
const closeBtn = document.querySelector("#close-btn");
const inputForm = document.querySelector("#input-task-form");

export function formDisplay() {
  const addTaskBtn = document.querySelector("#add-task-btn");
  addTaskBtn.addEventListener("click", () => {
    taskForm.style.display = "block";
  });
  closeBtn.addEventListener("click", () => {
    taskForm.style.display = "none";
  });
  inputForm.addEventListener("submit", (e) => {
    taskForm.style.display = "none";
    e.preventDefault();
    const titleValue = document.querySelector("#tit").value;
    const descriptionValue = document.querySelector("#des").value;

    const date = new Date();
    const formatDate = date.toLocaleDateString();

    let newTaskObj = {
      id: Date.now(),
      title: titleValue,
      description: descriptionValue,
      status: `pending`,
      dateTime: formatDate,
    };
    tasks.push(newTaskObj);
    renderTask();
  });
}
