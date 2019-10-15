const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const accountData = fs.readFileSync(path.join(__dirname, "json/accounts.json"), { encoding: "UTF8" });
const userData = fs.readFileSync(path.join(__dirname, "json/users.json"), { encoding: "UTF8" });

const accounts = JSON.parse(accountData);
const users = JSON.parse(userData);

app.get("/", (rec, req) => {
    req.render("index",
        { accounts: accounts, title: "Account Summary" });
});

app.get("/savings", (rec, req) => {
    req.render("account", { account: accounts.savings });
});

app.get("/checking", (rec, req) => {
    req.render("account", { account: accounts.checking });
});

app.get("/credit", (rec, req) => {
    req.render("account", { account: accounts.credit });
});

app.get("/profile", (rec, req) => {
    req.render("profile", { user: users[0] });
});

app.listen(3000, () => console.log("project running"));