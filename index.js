import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const blogsContent = [
  "Hello hwokdokoss",
  "dssasaadfaff",
  "dsdasffffffegeeefgeggg",
];

app.get("/", (req, res) => {
  res.render("index.ejs", { content: blogsContent });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
