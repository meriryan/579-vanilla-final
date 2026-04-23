const foods = ["🍔", "🌮", "🍕", "🍿", "🍟"];
const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");
const moveBtn = document.getElementById("move-btn");

// Populate left side on load
foods.forEach(food => {
  const circle = document.createElement("div");
  circle.classList.add("food-circle");
  circle.textContent = food;
  leftSide.appendChild(circle);
});

moveBtn.addEventListener("click", () => {
  const firstItem = leftSide.querySelector(".food-circle");
  if (firstItem) {
    leftSide.removeChild(firstItem);
    rightSide.appendChild(firstItem);
  } else {
    moveBtn.textContent = "All done!";
    moveBtn.disabled = true;
  }
});