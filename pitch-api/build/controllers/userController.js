"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser =
  exports.signUser =
  exports.registerUser =
  exports.allUsers =
    void 0;
const user_1 = require("../models/user");
const auth_1 = require("../services/auth");
const allUsers = async (req, res, next) => {
  let users = await user_1.User.findAll();
  res.status(200).json(users);
};
exports.allUsers = allUsers;
const registerUser = async (req, res, next) => {
  console.log(exports.registerUser);
  let newUser = req.body;
  if (newUser.email && newUser.password) {
    let hashPass = await (0, auth_1.hashedPass)(newUser.password);
    newUser.password = hashPass;
    let created = await user_1.User.create(newUser);
    res.status(200).json({
      email: created.email,
      userId: created.userId,
      token: hashPass,
    });
  } else {
    res.status(400).send("Email and password required.");
  }
};
exports.registerUser = registerUser;
const signUser = async (req, res, next) => {
  let validUser = await user_1.User.findOne({
    where: { email: req.body.email },
  });
  if (validUser) {
    let matchPass = await (0, auth_1.comparePass)(
      req.body.password,
      validUser.password
    );
    if (matchPass) {
      let token = await (0, auth_1.tknSignUser)(validUser);
      res.status(200).json({ token });
    } else {
      res.status(401).json("Password invalid");
    }
  } else {
    res.status(401).json("Email invalid");
  }
};
exports.signUser = signUser;
const getUser = async (req, res, next) => {
  console.log("this got called");
  console.log(req);
  let user = await (0, auth_1.verifiedUser)(req);
  if (user) {
    let { email } = user;
    res.status(200).json({
      email,
    });
  } else {
    res.status(401).send();
  }
};
exports.getUser = getUser;
