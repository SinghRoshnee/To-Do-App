import { tasks } from "./tasks.js";
import { handleCheckboxClick } from "./updateStatus.js";
import { deleteFun } from "./updateStatus.js";
import { cancelFun } from "./updateStatus.js";
import { editfun } from "./edit.js";
import {seteditvarvalue} from "./main.js";


import { getSearchValue } from "./main.js";
import { getActiveMenu } from "./main.js";

export function renderTask() {
  const taskSection = document.querySelector("#taskSection");
  taskSection.innerHTML = "";

  let rev = [...tasks].reverse();
  rev.forEach((task) => {
    if (
      (getSearchValue() !== "" &&
        task.title.toLowerCase().includes(getSearchValue())) ||
      getActiveMenu() === "all" ||
      task.status === getActiveMenu()
    ) {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("box");
      taskDiv.classList.add(
        task.status === "pending"
          ? "pendingtask"
          : task.status === "completed"
          ? "completedtask"
          : task.status === "cancled"
          ? "cancledtask"
          : task.status === "deleted"
          ? "deletedtask"
          : ""
      );
      taskDiv.innerHTML = `
         <div class="boxSection1">
                <input type="checkbox" class="blank-box" />
                <h3 class="title">${task.title}</h3>
              </div>
              <div class="boxSection2">
                <p class="description">
                ${task.description}
                </p>
                <div class="spanPart">
                  <span class="mydate">${task.dateTime}</span>
                  <div>
                  ${
                    task.status !== "deleted"
                      ? `<button class="del-btn btn">
                      Delete
                    </button>`
                      : ""
                  }
                  ${
                    task.status !== "cancled"
                      ? `<button class="cancel-btn btn">
                      Cancel
                    </button>`
                      : ""
                  }
                  <button class="edit-btn btn">
                     Edit
                    </button>
                  </div>
                  
                </div>
              </div>
    `;

      taskSection.appendChild(taskDiv);

      const checkbox = taskDiv.querySelector(".blank-box");
      checkbox.checked = task.status === "completed";
      checkbox.addEventListener("click", () => {
        handleCheckboxClick(task);
      });

      const delBtn = taskDiv.querySelector(".del-btn");
      delBtn?.addEventListener("click", () => {
        deleteFun(task);
      });

      const cancelBtn = taskDiv.querySelector(".cancel-btn");
      cancelBtn?.addEventListener("click", () => {
        cancelFun(task);
      });

     
      const editBtn = taskDiv.querySelector(".edit-btn");
      editBtn.addEventListener("click", () => {
        seteditvarvalue(task.id)
        editfun(task)
      });
    }
  });
}