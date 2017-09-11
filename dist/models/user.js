'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserModel = undefined;

var _sequelize = require('sequelize');

const NAME = 'users';

const SCHEMA = {
    id: {
        type: _sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    hash: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: _sequelize.DataTypes.STRING
    }
};
const OPTIONS = {
    timestamps: true,
    paranoid: true,
    underscored: true
};
const UserModel = exports.UserModel = connection => {
    return connection.define(NAME, SCHEMA, OPTIONS);
};
//# sourceMappingURL=user.js.map