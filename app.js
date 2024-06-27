const express = import("express");
const ejs = import("ejs");
const app = express();
const PORT = 3000;
const usersRouter = import("./routes/users.js");
const postsRouter = import("./routes/posts.js");
const notesRouter = import("./routes/notes.js");
const error = import("./utilities/error.js");
const path = import("path");

app.set("view engine", "ejs");

__dirname = path.resolve();
app.use(express.static(path.join(__dirname, "views")));

app.use("users/:id", usersRouter);

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

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
