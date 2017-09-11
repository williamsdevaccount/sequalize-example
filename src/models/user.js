import {DataTypes} from 'sequelize';

const NAME = 'users';

const SCHEMA = {
    id : {
        type : DataTypes.UUID,
        allowNull : false,
        primaryKey : true
    },
    username : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    hash : {
        type : DataTypes.STRING,
        allowNull : false
    },
    phone :{
        type : DataTypes.STRING
    }
};
const OPTIONS = {
    timestamps : true,
    paranoid : true,
    underscored : true
};
export const UserModel = (connection)=>{
    return connection.define(NAME,SCHEMA,OPTIONS);
};