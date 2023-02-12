import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
    declare userId: number;
    declare email: string;
    declare password: string;
    declare firstName: string;
    declare lastName: string;
    declare gender: string;
    declare age: number;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}
export function UserFactory(sequelize: Sequelize) {
    User.init({
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
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
        tableName:'users',
        freezeTableName: true,
        sequelize
    })
}
