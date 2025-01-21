import { renderTask } from "./rendertask.js";
import {  getSearchValue, setActiveMenu, menuItem } from "./main.js";

const leftSection = document.querySelector(".leftSection");
export function navMenu() {
  menuItem.forEach((nav) => {
    nav.addEventListener("click", () => {
      if (getSearchValue() === "") {
        menuItem.forEach((navlink) => {
          navlink.classList.remove("active");
        });
        nav.classList.add("active");
        leftSection.style.display = "none";
        const value = nav.getAttribute("data-value");
        setActiveMenu(value);
        renderTask();
      }
    });
  });
}
