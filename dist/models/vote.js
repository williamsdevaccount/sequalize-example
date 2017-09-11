'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VoteModel = undefined;

var _sequelize = require('sequelize');

const NAME = 'votes';

const SCHEMA = {
    id: {
        type: _sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    choice: {
        type: _sequelize.DataTypes.UUID,
        allowNull: false
    }
};
const OPTIONS = {
    timestamps: true,
    paranoid: true,
    underscored: true
};
const VoteModel = exports.VoteModel = connection => {
    return connection.define(NAME, SCHEMA, OPTIONS);
};
//# sourceMappingURL=vote.js.map