const message = document.querySelector("#messageUser");
const username = localStorage.getItem("username");
message.innerHTML = `Fuck you ${username}`;
