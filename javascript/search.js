import {
  setSearchValue,
  getSearchValue,
  setActiveMenu,
  menuItem,
} from "./main.js";
import { renderTask } from "./rendertask.js";

const searchBar = document.querySelector("#searchbar");

searchBar.addEventListener("input", () => {
  setSearchValue(searchBar.value);

  if (getSearchValue() !== "") {
    search();
  } else {
    const pendingMenu = document.querySelector("div[data-value='pending']");
    pendingMenu.classList.add("active");
    setActiveMenu("pending");
    setSearchValue(""); // Reset `searchValue`
    renderTask();
  }
});

function search() {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
  setActiveMenu(""); // Reset `activeMenu`
  renderTask();
}
