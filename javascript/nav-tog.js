const toggleBtn = document.querySelector(".nav-toggle ");
const leftSection = document.querySelector(".leftSection");
const cancelBtn = document.querySelector(".cancel ");
const rightSection = document.querySelector(".rightSection");
console.log(toggleBtn);
toggleBtn.addEventListener("click", () => {
  //toggleBtn.classList.toggle("active");
  leftSection.style.display = "block";
  rightSection.classList.add(".blur-background")
});

cancelBtn.addEventListener("click", () => {
  leftSection.style.display = "none";
});
