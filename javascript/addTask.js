import { tasks } from "./tasks.js";
import { renderTask } from "./rendertask.js";
import { geteditvarValue } from "./main.js";
import { editfun } from "./edit.js";

export function checkfunAddEdit() {
  if (geteditvarValue() !== null) {
    editfun();
  } else {
    addTask();
  }
}

const taskForm = document.querySelector("#task-form");
const closeBtn = document.querySelector("#close-btn");
const inputForm = document.querySelector("#input-task-form");

function addTask() {
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
    const title = document.querySelector("#tit");
    const description = document.querySelector("#des");

    const date = new Date();
    const formatDate = date.toLocaleString();

    let newTaskObj = {
      id: Date.now(),
      title: title.value,
      description: description.value,
      status: `pending`,
      dateTime: formatDate,
    };

    tasks.push(newTaskObj);

    title.value = "";
    description.value = "";

    renderTask();
  });
}

// if (geteditvarValue() !== null) {
//   editfun();
// } else {
//   let newTaskObj = {
//     id: Date.now(),
//     title: title.value,
//     description: description.value,
//     status: `pending`,
//     dateTime: formatDate,
//   };

//   tasks.push(newTaskObj);

//   title.value = "";
//   description.value = "";

//   renderTask();
// }
