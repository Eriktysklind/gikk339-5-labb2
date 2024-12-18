const url = "http://localhost:3000/users";
const ul = document.createElement("ul");

fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((jsonData) => console.log(jsonData));

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const li = document.createElement("li");
      li.style.backgroundColor = user.color;
      li.style.padding = "1rem";
      li.style.margin = "0.5rem";
      li.style.listStyleType = "none";
      li.innerHTML = `<p>${user.id}.  ${user.firstName} ${user.lastName}</p> <p> ${user.username}</p>  <p>${user.color}</p>`;

      ul.appendChild(li);
    }
  });
const newDiv = document.createElement("div");
document.body.appendChild(ul);
/* const newDiv = document.getElementById("newDiv");
newDiv.appendChild(ul); */
