const express = require("express");
const router = express.Router();
//Importing the data from our fake database file
const posts = require("../sample data/posts.js");

//////////////////
// BASE PATH
// - /api/posts
//////////////////

// Creating a GET route for the entire posts database.
// impractical for larger data sets.
// GET /api/posts
router.get("/", (req, res) => {
  const links = [
    {
      href: "posts/:id",
      rel: ":id",
      type: "GET",
    },
  ];

  res.json({ posts, links });
});

// Creating a simple GET route for individual posts,
// using a route parameter for the unique id.
// GET /api/posts/:id
router.get("/posts", (req, res, next) => {
  const links = [
    {
      href: `/${req.params.id}`,
      rel: "",
      type: "PATCH",
    },
    {
      href: `/${req.params.id}`,
      rel: "",
      type: "DELETE",
    },
  ];

  if (post) res.json({ post, links });
  else next();
});

//Creating a post (POST)
// POST /api/posts
router.post("/", (req, res) => {
  // Within the POST request route, we create a new
  // post with the data given by the client.
  // We should also do some more robust validation here,
  // but this is just an example for now.
  if (req.body.content && req.body.userId && req.body.id) {
    if (posts.find((u) => u.id == req.body.id)) {
      res.json({ error: "Post Already Exists" });
      return;
    }

    const post = {
      id: posts[posts.length - 1].id + 1,
      userId: req.body.userId,
      title: req.body.title,
      content: req.body.content,
    };

    posts.push(post);
    res.json(posts[posts.length - 1]);
  } else next(error(400, "Insufficient Data"));
});

// PATCH /api/posts/:id
router.patch("/:id", (req, res) => {
  // Within the PATCH request route, we allow the client
  // to make changes to an existing post in the database.
  const post = posts.find((p, i) => {
    if (p.id == req.params.id) {
      // iterating through the post object and updating each property with the data that was sent by the client
      for (const key in req.body) {
        posts[i][key] = req.body[key];
      }
      return true;
    }
  });

  if (post) res.json(post);
  else next();
});

// DELETE /api/posts/:id
router.delete("/:id", (req, res) => {
  // The DELETE request route simply removes a resource.
  const post = posts.find((p, i) => {
    if (p.id == req.params.id) {
      posts.splice(i, 1);
      return true;
    }
  });

  if (post) res.json(post);
  else next();
});

module.exports = router;
