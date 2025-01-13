import { tasks } from "./tasks.js";
import { renderTask } from "./rendertask.js";

export function handleCheckboxClick(task) {
  if (task.status !== "completed") {
    completeTaskFun(task.id);
  } else {
    undoTaskFun(task.id);
  }
}

function completeTaskFun(tskId) {
  tasks.forEach((e) => {
    if (e.id === tskId) {
      e.status = "completed";
    }
    renderTask();
  });
}

function undoTaskFun(tskId) {
  tasks.forEach((e) => {
    if (e.id === tskId) {
      e.status = "pending";
    }
    renderTask();
  });
}

export function deleteFun(task) {
  if (task.status !== "deleted") {
    task.status = "deleted";
    renderTask();
  }
}

export function cancelFun(task) {
  if (task.status !== "cancled") {
    task.status = "cancled";
    renderTask();
  }
}
