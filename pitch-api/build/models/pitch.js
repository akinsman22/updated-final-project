"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateUserPitch = exports.PitchFactory = exports.Pitch = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
class Pitch extends sequelize_1.Model {}
exports.Pitch = Pitch;
function PitchFactory(sequelize) {
  Pitch.init(
    {
      pitchId: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
      },
      // url?: {
      //     type: DataTypes.STRING,
      //     allowNull: false,
      // },
      post: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
      },
      updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
      },
    },
    {
      freezeTableName: true,
      tableName: "pitches",
      sequelize,
    }
  );
}
exports.PitchFactory = PitchFactory;
function AssociateUserPitch() {
  user_1.User.hasMany(Pitch, { foreignKey: "userId" });
  Pitch.belongsTo(user_1.User, { foreignKey: "userId" });
}
exports.AssociateUserPitch = AssociateUserPitch;
// User has many pitches
// each bookmark has one user
