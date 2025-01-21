import { tasks } from "./tasks.js";
import { renderTask } from "./rendertask.js";
import { seteditvarvalue } from "./main.js";
import { addlocalStorage } from "./tasks.js";

const taskForm = document.querySelector("#task-form");
const tskBtn = document.querySelector("#task-sub-btn");
const title = document.querySelector("#tit");
const description = document.querySelector("#des");
const closeBtn = document.querySelector("#close-btn");

let editHandler = null;

export function editfun(task) {
  if (!task) return;

  const tid = task.id;
  const noteIndex = tasks.findIndex((note) => note.id === tid);

  if (noteIndex !== -1) {
    const selectedTask = tasks[noteIndex];
    taskForm.style.display = "block";
    tskBtn.textContent = "Save Task";

    title.value = selectedTask.title;
    description.value = selectedTask.description;

    // Remove previous event listener if it exists
    if (editHandler) {
      tskBtn.removeEventListener("click", editHandler);
      closeBtn.removeEventListener("click", editHandler);
    }

    // Create a new event handler for this task edit
    editHandler = function (e) {
      e.preventDefault();

      tasks[noteIndex].title = title.value;
      tasks[noteIndex].description = description.value;

      addlocalStorage()

      renderTask();

      seteditvarvalue(null);
      title.value = "";
      description.value = "";

      tskBtn.textContent = "Add Task";
      taskForm.style.display = "none";

      // Remove event listener after completing the task edit
      tskBtn.removeEventListener("click", editHandler);
      closeBtn.removeEventListener("click", editHandler);

      
    };

    tskBtn.addEventListener("click", editHandler);
    closeBtn.addEventListener("click", editHandler);
   
  }
}
