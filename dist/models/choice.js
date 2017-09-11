'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChoiceModel = undefined;

var _sequelize = require('sequelize');

const NAME = 'choice';

const SCHEMA = {
    id: {
        type: _sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    text: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    }
};
const OPTIONS = {
    timestamps: true,
    paranoid: true,
    underscored: true
};
const ChoiceModel = exports.ChoiceModel = connection => {
    return connection.define(NAME, SCHEMA, OPTIONS);
};
//# sourceMappingURL=choice.js.map