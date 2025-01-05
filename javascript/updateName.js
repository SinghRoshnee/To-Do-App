//displayig app name
const appInputBar = document.querySelector("#userNameInput");
const savebtn = document.querySelector("#saveBtn");
const edibtn1 = document.querySelector("#editbtn1");

export function displayAppName() {
  edibtn1.addEventListener("click", (e) => {
    appInputBar.disabled = false;
    (edibtn1.style.display = "none"), (savebtn.style.display = "block");
    savebtn.addEventListener("click", () => {
      let appNameVar = appInputBar.value;
      localStorage.setItem("AppName", appNameVar);
      appInputBar.disabled = true;
      (edibtn1.style.display = "block"), (savebtn.style.display = "none");
    });
  });
  setAppName();
}

function setAppName() {
  const name = localStorage.getItem("AppName");
  appInputBar.value = name;
}

