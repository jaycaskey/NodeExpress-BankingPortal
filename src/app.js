const path = require("path");
const express = require("express");
const fs = require ("fs")

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (rec, req) => { req.render("index", { title: "Index" }); });

app.listen(3000, () => console.log("project running"));