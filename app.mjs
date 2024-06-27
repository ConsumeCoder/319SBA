const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = 3000;
const usersRouter = require("./routes/users.js");
const postsRouter = require("./routes/posts.js");
const notesRouter = require("./routes/notes.js");
const error = require("./utilities/error.js");
const path = require("path");

app.listen(PORT, () => {
  console.log("app is listening on port", PORT);
});

app.set("view engine", "ejs");

__dirname = path.resolve();
app.use(express.static(path.join(__dirname, "views")));

app.use("users:", usersRouter);

app.get("/", (req, res) => {
  const year = req.query.year || 2024;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  res.render("index.ejs", { calendar: calendar(year), months, year });
});
