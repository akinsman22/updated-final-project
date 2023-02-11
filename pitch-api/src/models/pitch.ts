import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { User } from "./user";

export class Pitch extends Model<InferAttributes<Pitch>, InferCreationAttributes<Pitch>>{
    declare pitchId: number;
    declare userId: number;
    // declare url?: string;
    declare post: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function PitchFactory(sequelize: Sequelize) {
    Pitch.init({
        pitchId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // url?: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        post: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'pitches',
        sequelize
    });
}

export function AssociateUserPitch(){
    User.hasMany(Pitch, { foreignKey: 'userId' });
    Pitch.belongsTo(User, { foreignKey: 'userId' });
}
// User has many pitches
// each bookmark has one user