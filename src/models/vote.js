import {DataTypes} from 'sequelize';

const NAME = 'votes';

const SCHEMA = {
    id : {
        type : DataTypes.UUID,
        allowNull : false,
        primaryKey : true
    },
    choice : {
        type : DataTypes.UUID,
        allowNull: false
    },
    pollId : {
        type : DataTypes.UUID,
        allowNull : false
    }
};
const OPTIONS = {
    timestamps : true,
    paranoid : true,
    underscored : true
};
export const VoteModel = (connection)=>{
    return connection.define(NAME,SCHEMA,OPTIONS);
};