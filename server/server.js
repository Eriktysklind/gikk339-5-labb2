const express = require("express");
const server = express();
const sqlite3 = require("sqlite3").verbose(); // importerar modulen för sqlite3 och spara den i variablen sqlite3

// vilka kommandon i termnialen och rader kod möjliggör att ni kan använda sqlite i erat node.js.?  npm install sqlite3

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

server.get("/users", (req, res) => {
  const db = new sqlite3.Database("./server/gik339-labb2.db"); // på  raden där vi skapar variablen db där vi skapar upp en ny databas och skapar en uppkoppling mellan databasen och filen.
  db.all("SELECT * FROM USERS", (err, rows) => {
    if (err) {
      // if statsen innehåller raderna kod som skicker respons till klienten beroende på om det uppstod
      res.status(500).send(err);
    } else {
      res.send(rows); //  objektet res: responsen eller svaret som skicks ifrån vår server till klienten. i detta fall error status 500 eller så skickar den rows.
    }
  });
});

server.listen(3001, () => console.log("Kör server 3001"));
