import {DataTypes} from 'sequelize';

const NAME = 'choice';

const SCHEMA = {
    id : {
        type : DataTypes.UUID,
        allowNull : false,
        primaryKey : true
    },
    text : {
        type : DataTypes.STRING,
        allowNull : false,
    }
};
const OPTIONS = {
    timestamps : true,
    paranoid : true,
    underscored : true
};
export const ChoiceModel = (connection)=>{
    return connection.define(NAME,SCHEMA,OPTIONS);
};