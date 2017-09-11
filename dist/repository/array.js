'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ArrayRepository {
    constructor() {
        this.store = {};
    }
    save(data) {
        _lodash2.default.set(this.store, _lodash2.default.get(data, 'id', _lodash2.default.keys(this.store).length), data);
        return _bluebird2.default.resolve(data);
    }
    all() {
        return _bluebird2.default.resolve(_lodash2.default.values(this.store));
    }
    get(id) {
        return _bluebird2.default.resolve(_lodash2.default.get(this.store, id, {}));
    }
    update(id, data) {
        _lodash2.default.set(this.store, id, data);
        return _bluebird2.default.resolve(data);
    }
    remove(id) {
        _lodash2.default.unset(this.store, id);
        return _bluebird2.default.resolve(true);
    }
}
exports.default = ArrayRepository;
//# sourceMappingURL=array.js.map