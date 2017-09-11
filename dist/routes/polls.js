'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _service = require('../services/service');

var _service2 = _interopRequireDefault(_service);

var _sql = require('../repository/sql');

var _sql2 = _interopRequireDefault(_sql);

var _sqlconnection = require('../util/sqlconnection');

var _index = require('../models/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connection = (0, _sqlconnection.getSqliteConnection)(`${__dirname}/../../src/data/polls.sqlite`);
const models = (0, _index.getModels)(connection);
const service = new _service2.default(new _sql2.default(models.poll));
const router = (0, _express.Router)();

router.route('/').post(service.save).get(service.all);
router.route('/:id').get(service.get).patch(service.update).delete(service.delete);

exports.default = router;
//# sourceMappingURL=polls.js.map