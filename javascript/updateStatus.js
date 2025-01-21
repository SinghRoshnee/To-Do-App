import { tasks } from "./tasks.js";
import { renderTask } from "./rendertask.js";
import { addlocalStorage } from "./tasks.js";

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
  addlocalStorage(); 
}

function undoTaskFun(tskId) {
  tasks.forEach((e) => {
    if (e.id === tskId) {
      e.status = "pending";
    }
    //addlocalStorage();
    renderTask();
  });
  addlocalStorage();
}

export function deleteFun(task) {
  if (task.status !== "deleted") {
    task.status = "deleted";
    //addlocalStorage();
    renderTask();
  }
  addlocalStorage();
}

export function cancelFun(task) {
  if (task.status !== "cancled") {
    task.status = "cancled";
    //addlocalStorage();
    renderTask();
  }
  addlocalStorage();
}
