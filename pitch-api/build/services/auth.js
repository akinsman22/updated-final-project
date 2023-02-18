"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifiedUser =
  exports.tknSignUser =
  exports.comparePass =
  exports.hashedPass =
    void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const secret = "I am singing in the rain.";
const hashedPass = async (plainText) => {
  const saltRound = 18;
  const hashP = await bcrypt_1.default.hash(plainText, saltRound);
  return hashP;
};
exports.hashedPass = hashedPass;
const comparePass = async (plainText, hashedPass) => {
  return await bcrypt_1.default.compare(plainText, hashedPass);
};
exports.comparePass = comparePass;
const tknSignUser = async (user) => {
  let token = jsonwebtoken_1.default.sign({ userId: user.userId }, secret, {
    expiresIn: "1hr",
  });
  return token;
};
exports.tknSignUser = tknSignUser;
const verifiedUser = async (req) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      let decode = await jsonwebtoken_1.default.verify(token, secret);
      return await user_1.User.findByPk(decode.userId);
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
};
exports.verifiedUser = verifiedUser;
