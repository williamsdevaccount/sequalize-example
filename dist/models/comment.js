'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommentModel = undefined;

var _sequelize = require('sequelize');

const NAME = 'comment';

const SCHEMA = {
    id: {
        type: _sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    text: {
        type: _sequelize.DataTypes.STRING
    }
};
const OPTIONS = {
    timestamps: true,
    paranoid: true,
    underscored: true
};
const CommentModel = exports.CommentModel = connection => {
    return connection.define(NAME, SCHEMA, OPTIONS);
};
//# sourceMappingURL=comment.js.map