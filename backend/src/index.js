const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json());

const  {signup, signin, user,rating, userbyId, deleteUser } = require("./controllers/auth.controller")
const postController = require("./controllers/post.controller")


app.post("/signup", signup);
app.post("/signin", signin);
app.get("/users", user)
app.patch("/rating/:id",rating)
app.get("/users/:id", userbyId)
app.delete("/users/:id", deleteUser)

app.use("/posts", postController)

module.exports = app;
