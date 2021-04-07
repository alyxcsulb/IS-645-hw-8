/* Chapter 22 – Using Web APIs
1.	GitHub Profile (end of chapter assignment / modified)
The ubiquitous code sharing platform GitHub has a public API. The goal of this exercise is to display some information about a GitHub user, identified by his login. The API documentation is available here (updated link).
Use this API to show the profile picture, name, blog website address, and when the account was created of a GitHub user whose login is entered in a text box.
*/

// jsway example from manuscript//

/*
GitHub user info
*/

const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  e.preventDefault();
  const login = formElement.elements.login.value;
  fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(user => {
      // Create user info
      const pictureElement = document.createElement("img");
      pictureElement.src = user.avatar_url;
      pictureElement.style.height = "150px";
      pictureElement.style.width = "150px";
      const nameElement = document.createElement("div");
      nameElement.textContent = user.name;
      nameElement.style.fontSize = "20px";
      const websiteElement = document.createElement("a");
      websiteElement.href = user.blog;
      websiteElement.textContent = websiteElement.href;
      // Add info on the page
      const infosElement = document.getElementById("infos");
      infosElement.innerHTML = ""; // Remove previous user info
      infosElement.appendChild(pictureElement);
      infosElement.appendChild(nameElement);
      infosElement.appendChild(websiteElement);
    })
    .catch(err => {
      console.error(err.message);
    });
});