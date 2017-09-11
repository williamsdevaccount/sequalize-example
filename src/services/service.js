
import uuid from 'uuid';
import _ from 'lodash';


export default class Service{
    constructor(store){
        this.store = store;
        _.bindAll(this,['save','all','get','update','delete']);
    }
    static id(){
        return uuid.v4();
    }
    static pathId(req = {}){
        return _.get(req.params,'id','');
    }
    save(req,res,next){
        let newData = req.body;
        _.set(newData,'id',Service.id());
        return this.store.save(newData)
            .then(data =>{res.json(data)})
            .catch(e =>{next(e);})
    }
    all(req,res,next){
        return this.store.all()
            .then(data =>{res.json(data)})
            .catch(e =>{next(e);});
    }
    get(req,res,next){
        return this.store.get(Service.pathId(req))
            .then(data =>{res.json(data)})
            .catch(e =>{next(e);});
    }
    update(req,res,next){
        let current = this.store.get(Service.pathId(req));
        let update = Object.assign({},req.body,current);
        return this.store.update(Service.pathId(req),update)
            .then(data =>{res.json(data)})
            .catch(e =>{next(e);});
    }
    delete(req,res,next){
        return this.store.delete(Service.pathId(req))
            .then(deleted =>{res.sendStatus(204);})
            .catch(e =>{next(e);})
    }
}