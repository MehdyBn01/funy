const input = document.querySelector(".input");
const error = document.querySelector(".error");
const btn = document.querySelector(".btn");
const message = document.querySelector("#messageUser");

btn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents form submission
  if (input.value.trim() !== "") {
    localStorage.setItem("username", input.value.trim());
    window.location.href = "fake.html";
  } else {
    error.style.display = "flex"; // Show the error message
  }

 
});
 