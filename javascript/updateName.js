// Selecting elements
const appInputBar = document.querySelector("#userNameInput");
const savebtn = document.querySelector("#saveBtn");
const edibtn1 = document.querySelector("#editbtn1");

// Function to display and edit app name
export function displayAppName() {
  // Check if all elements exist
  if (!appInputBar || !savebtn || !edibtn1) {
    return;
  }

  // Initialize App Name on page load
  setAppName();

  // Add event listener for Edit button
  edibtn1.addEventListener("click", () => {
    appInputBar.disabled = false; // Enable input
    appInputBar.style.border = "0.2px solid whitesmoke"; // Show thin white border
    edibtn1.style.display = "none"; // Hide Edit button
    savebtn.style.display = "block"; // Show Save button
  });

  // Add event listener for Save button
  savebtn.addEventListener("click", () => {
    const appNameVar = appInputBar.value; // Get input value
    localStorage.setItem("AppName", appNameVar); // Save to localStorage
    appInputBar.disabled = true; // Disable input
    appInputBar.style.border = "none"; // Remove border after saving
    edibtn1.style.display = "block"; // Show Edit button
    savebtn.style.display = "none"; // Hide Save button
    appInputBar.style.background = "none"
  });
}

// Function to initialize App Name from localStorage
function setAppName() {
  const name = localStorage.getItem("AppName");
  if (name) {
    appInputBar.value = name; // Set the value from localStorage
  } else {
    appInputBar.value = ""; // Clear the input if no name exists
  }
  appInputBar.disabled = true; // Disable input initially
  savebtn.style.display = "none"; // Hide Save button initially
  edibtn1.style.display = "block"; // Show Edit button initially
  // appInputBar.value = ""
}


// //displayig app name
// const appInputBar = document.querySelector("#userNameInput");
// const savebtn = document.querySelector("#saveBtn");
// const edibtn1 = document.querySelector("#editbtn1");

// export function displayAppName() {
//   edibtn1.addEventListener("click", (e) => {
//     appInputBar.disabled = false;
//     appInputBar.style.border = "1px solid whitesmoke"; // Add thin white border
//     appInputBar.style.display = "block";
//     (edibtn1.style.display = "none"), (savebtn.style.display = "block");
//     savebtn.addEventListener("click", () => {
//       let appNameVar = appInputBar.value;
//       localStorage.setItem("AppName", appNameVar);
//       appInputBar.disabled = true;
//       appInputBar.style.border = "1px solid whitesmoke"; 
//       appInputBar.style.display = "none";
//       (edibtn1.style.display = "block"), (savebtn.style.display = "none");
//     });
//   });
//   setAppName();
// }

// function setAppName() {
//   const name = localStorage.getItem("AppName");
//   appInputBar.value = name;
// }
