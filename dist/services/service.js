'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Service {
    constructor(store) {
        this.store = store;
        _lodash2.default.bindAll(this, ['save', 'all', 'get', 'update', 'delete']);
    }
    static id() {
        return _uuid2.default.v4();
    }
    static pathId(req = {}) {
        return _lodash2.default.get(req.params, 'id', '');
    }
    save(req, res, next) {
        let newData = req.body;
        _lodash2.default.set(newData, 'id', Service.id());
        return this.store.save(newData).then(data => {
            res.json(data);
        }).catch(e => {
            next(e);
        });
    }
    all(req, res, next) {
        return this.store.all().then(data => {
            res.json(data);
        }).catch(e => {
            next(e);
        });
    }
    get(req, res, next) {
        return this.store.get(Service.pathId(req)).then(data => {
            res.json(data);
        }).catch(e => {
            next(e);
        });
    }
    update(req, res, next) {
        let current = this.store.get(Service.pathId(req));
        let update = Object.assign({}, req.body, current);
        return this.store.update(Service.pathId(req), update).then(data => {
            res.json(data);
        }).catch(e => {
            next(e);
        });
    }
    delete(req, res, next) {
        return this.store.delete(Service.pathId(req)).then(deleted => {
            res.sendStatus(204);
        }).catch(e => {
            next(e);
        });
    }
}
exports.default = Service;
//# sourceMappingURL=service.js.map