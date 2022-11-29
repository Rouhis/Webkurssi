"use strict";
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const port = 3000;

const user = {
  username: "foo",
  password: "bar",
};
let loggedin = false;

app.set("views", "./views");
app.set("view engine", "pug");
app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "asdfgdfsdfewr",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 6000 },
  })
);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/form", (req, res) => {
  res.render("form");
});
app.get("/secret", (req, res) => {
  if (req.session.loggedin) {
    res.render("secret");
  } else {
    res.redirect("/form");
  }
});

app.post("/login", (req, res) => {
  //check for username and pwd
  console.log(req.session);
  if (
    req.body.username == user.username &&
    req.body.password == user.password
  ) {
    loggedin = true;
    res.redirect("/secret");
  }
});

app.get("/setCookie/:color", (req, res) => {
  console.log(req.params.color);
  res.cookie("color", req.params.color);
  res.send("setting a coookie");
});

app.get("/getCookie", (req, res) => {
  res.send("your color choice was" + req.cookies.color);
});

app.get("/deletecookie", (req, res) => {
  res.clearCookie("color");
  res.send("Color cookie deleted");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
