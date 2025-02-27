const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  try {
    await axios.post("http://127.0.0.1:4005/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    });
  } catch (error) {
    console.log("Error post to event bus", error.message);
  }

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Event Recieved: ", req.body.type);
  res.send({});
});
app.listen(4000, () => {
  console.log("Listing on 4000");
});
