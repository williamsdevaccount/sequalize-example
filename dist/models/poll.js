'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PollModel = undefined;

var _sequelize = require('sequelize');

const NAME = 'polls';

const SCHEMA = {
    id: {
        type: _sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: _sequelize.DataTypes.STRING
    }
};
const OPTIONS = {
    timestamps: true,
    paranoid: true,
    underscored: true
};
const PollModel = exports.PollModel = connection => {
    return connection.define(NAME, SCHEMA, OPTIONS);
};
//# sourceMappingURL=poll.js.map