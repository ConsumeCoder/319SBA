const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = 3000;
const usersRouter = require("./routes/users.js");
const postsRouter = require("./routes/posts.js");
const error = require("./utilities/error.js");
const path = require("path");

app.set("view engine", "ejs");
