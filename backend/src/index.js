const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json());

const  {signup, signin, user,rating } = require("./controllers/auth.controller")


app.post("/signup", signup);
app.post("/signin", signin);
app.get("/users", user)
app.patch("/rating/:id",rating)

module.exports = app;
