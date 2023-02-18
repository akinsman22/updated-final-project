"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
const pitch_1 = require("./pitch");
const dbName = "pitchDB";
const username = "root";
const password = "Password1!";
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
  host: "127.0.01",
  port: 3306,
  dialect: "mysql",
});
(0, pitch_1.PitchFactory)(sequelize);
(0, user_1.UserFactory)(sequelize);
(0, pitch_1.AssociateUserPitch)();
exports.db = sequelize;
