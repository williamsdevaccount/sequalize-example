'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSqliteConnection = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getSqliteConnection = exports.getSqliteConnection = (filePath = '') => {
    console.log(filePath);
    return new _sequelize2.default({
        storage: filePath,
        dialect: 'sqlite'
    });
};
//# sourceMappingURL=sqlconnection.js.map