'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SqlRepository {
    constructor(model = {}) {
        this.model = model;
    }

    sync() {
        return this.model.sync().then(() => {
            return _bluebird2.default.resolve(true);
        }).catch(err => {
            console.error(err);
            return _bluebird2.default.resolve(false);
        });
    }
    save(data) {
        return this.model.create(data);
    }
    saveMany(collection) {
        return this.model.bulkCreate(collection);
    }
    all() {
        return this.model.all();
    }
    get(id) {
        return this.model.findById(id);
    }
    update(id, data) {
        return this.model.update(data, {
            where: {
                id: id
            }
        });
    }
    delete(id) {
        return this.model.destroy({
            where: {
                id: id
            }
        });
    }
}
exports.default = SqlRepository;
//# sourceMappingURL=sql.js.map