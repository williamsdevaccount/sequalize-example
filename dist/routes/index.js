'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _polls = require('./polls');

var _polls2 = _interopRequireDefault(_polls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/polls', _polls2.default);
exports.default = router;
//# sourceMappingURL=index.js.map