const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json());




app.post("/signup", signup);
app.post("/signin", signin);
app.get("/users", user)


module.exports = app;
