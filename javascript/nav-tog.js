const toggleBtn = document.querySelector(".nav-toggle");
const leftSection = document.querySelector(".leftSection");
const cancelBtn = document.querySelector(".cancel");

// Function to toggle the left section visibility
export function navTog() {
  toggleBtn.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
      leftSection.style.display = "block";
    }
  });

  cancelBtn.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
      leftSection.style.display = "none";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      leftSection.style.display = "block";
    } else {
      leftSection.style.display = "none"; 
    }
  });

  document.querySelectorAll(".menuItem").forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      if (window.innerWidth <= 767) {
        leftSection.style.display = "none"; 
      }
    });
  });

}