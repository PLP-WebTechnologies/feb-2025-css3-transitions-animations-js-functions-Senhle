// Load saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.style.backgroundColor = savedTheme === "dark" ? "#333" : "#f0f0f0";
      document.getElementById("theme").value = savedTheme;
    }
  };
  
  // Save user theme preference
  document.getElementById("saveBtn").addEventListener("click", function () {
    const theme = document.getElementById("theme").value;
    localStorage.setItem("theme", theme);
    document.body.style.backgroundColor = theme === "dark" ? "#333" : "#f0f0f0";
    alert("Preference saved!");
  });
  
  // Animate the box when button is clicked
  document.getElementById("animateBtn").addEventListener("click", function () {
    const box = document.getElementById("animatedBox");
    box.classList.add("animate");
  
    // Remove class after animation so it can be triggered again
    setTimeout(() => {
      box.classList.remove("animate");
    }, 700);
  });
  