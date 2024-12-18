const url = "http://localhost:3000/users";
const ul = document.createElement("ul");

fetch(url) // funktionen fetch() är inbyggt i javascript och används för att skicka och ta emot data över ett nätverk, alltså över http.
  .then((response) => {
    // använder vi then() för att hantera  det asynkrona anropet response
    console.log(response);
    return response.json();
  })
  .then((jsonData) => console.log(jsonData));
// vi välde att använde then() för att hantera det asynkrona anropet då. det är den metoden vi kände oss mest bekäva med då vi använt den tidigare i lektionerna.
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    users.forEach((users) => {
      const li = document.createElement("li");
      //Stylar list elemeten
      li.style.backgroundColor = users.color;
      li.style.padding = "1rem";
      li.style.margin = "0.5rem";
      li.style.listStyleType = "none";
      li.innerHTML = `<h3>${users.id}.  ${users.firstName} ${users.lastName}</h3> <p> ${users.username}</p>  <p>${users.color}</p>`;

      ul.appendChild(li);
    });
  });

document.body.appendChild(ul);
