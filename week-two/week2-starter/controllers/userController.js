"use strict";
// catController
const userModel = require("../models/userModel");

const users = userModel.users;

const getUsers = (req, res) => {
  users.map((user) => {
    delete user.password;
    return user;
  });
  res.json(users);
};

const getUser = (req, res) => {
  const user = users.filter((user) => req.params.userId == user.id)[0];
  if (user) {
    delete user.password;
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const postUser = (req, res) => {
    console.log(req.body);
    const userInfo = `username :${req.body.name}, email: ${req.body.name}`;
    res.send('Adding new user' + userInfo);
  };

const modifyUser = (req, res) => {};



const deleteUser = (req, res) => {};

module.exports = {
  getUser,
  getUsers,
  postUser,
  modifyUser,
  deleteUser,
};
