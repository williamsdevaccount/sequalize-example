import {DataTypes} from 'sequelize';

const NAME = 'polls';

const SCHEMA = {
    id : {
      type : DataTypes.UUID,
      allowNull : false,
      primaryKey : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING
    }
};
const OPTIONS = {
    timestamps : true,
    paranoid : true,
    underscored : true
};
export const PollModel = (connection)=>{
    return connection.define(NAME,SCHEMA,OPTIONS);
};