import { tasks } from "./tasks.js";
import { displayAppName } from "./updateName.js";
import { renderTask } from "./rendertask.js";
import { formDisplay } from "./addTask.js";
import { navMenu } from "./nav.js";

export let searchValue = "";
export let activeMenu = "pending";

export function setSearchValue(value) {
  searchValue = value;
}

export function getSearchValue() {
  return searchValue;
}

export function setActiveMenu(value) {
  activeMenu = value;
}

export function getActiveMenu() {
  return activeMenu;
}

export let menuItem = document.querySelectorAll(".menuItem");


console.log(tasks);
displayAppName();
renderTask();
formDisplay();
navMenu();