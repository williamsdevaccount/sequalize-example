import {DataTypes} from 'sequelize';

const NAME = 'comment';

const SCHEMA = {
    id : {
        type : DataTypes.UUID,
        allowNull : false,
        primaryKey : true
    },
    text : {
        type : DataTypes.STRING
    }
};
const OPTIONS = {
    timestamps : true,
    paranoid : true,
    underscored : true
};
export const CommentModel = (connection)=>{
    return connection.define(NAME,SCHEMA,OPTIONS);
};