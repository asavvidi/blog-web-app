import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let blogPosts = [
  {
    title:
      "War latest: Putin's plane involved in illegally deporting Ukrainian children",
    description:
      "The new NATO chief has warned Vladimir Putin is ramping up reckless actions and is using Ukraine as a 'testing ground' for missiles. Meanwhile, US-backed research alleges the Kremlin leader's presidential plane has been involved in deporting Ukrainian children to Russia.",
  },
  {
    title: "Ukraine accelerating missile production, Zelensky says.",
    description:
      'There is a "significant volume" of new and long-term orders for first-person-view (FPV) drones, reconnaissance drones, long-range drones, and missile-drones, President Volodymyr Zelensky said.',
  },
];
app.get("/", (req, res) => {
  res.render("index.ejs", { content: blogPosts });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.post("/submit", (req, res) => {
  const newBlogPost = {
    title: req.body["blogTitle"],
    description: req.body["blogDescription"],
  };

  blogPosts.push(newBlogPost);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
