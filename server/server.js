server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

const express = require("express");
const server = express();

server.get("/users", (req, res) => {});

server.listen(3000, () => console.log("Kör server 3000"));
