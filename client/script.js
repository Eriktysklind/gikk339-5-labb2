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
    users.forEach((users) => {
      const li = document.createElement("li");

      li.style.backgroundColor = users.color;
      li.style.padding = "1rem";
      li.style.margin = "0.5rem";
      li.style.listStyleType = "none";
      li.innerHTML = `<h3>${users.id}.  ${users.firstName} ${users.lastName}</h3> <p> ${users.username}</p>  <p>${users.color}</p>`;

      ul.appendChild(li);
    });
  });

document.body.appendChild(ul);
