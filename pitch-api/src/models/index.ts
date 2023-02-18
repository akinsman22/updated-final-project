import { Sequelize } from "sequelize";
import { UserFactory } from "./user";
import { AssociateUserPitch, PitchFactory } from "./pitch";

const dbName = "pitchDB";
const username = "root";
const password = "Password1!";

const sequelize = new Sequelize(dbName, username, password, {
  host: "127.0.01",
  port: 3306,
  dialect: "mysql",
});

PitchFactory(sequelize);
UserFactory(sequelize);
AssociateUserPitch();

export const db = sequelize;
