import { tasks } from "./tasks.js";
import { displayAppName } from "./updateName.js";
import { renderTask } from "./rendertask.js";
import { navMenu } from "./nav.js";
import { searchM } from "./search.js";
import { checkfunAddEdit } from "./addTask.js";
import {navTog} from "./nav-tog.js"

export let editvar = null;

export function seteditvarvalue(val) {
  editvar = val;
}

export function geteditvarValue() {
  return editvar;
}

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
navMenu();
searchM();
checkfunAddEdit();
navTog();
