import container from '../ioc';
import ResponseHelper from '../util/responseformatter';
const service = container.get('service.poll');

export default class PollController{
    static save(req,res,next){
        return this.store.save(newData)
            .then(data =>{res.json(data)})
            .catch(e =>{next(e);})
    }
    static all(req,res,next){
        return this.store.all()
            .then(data =>{res.json(data)})
            .catch(e =>{next(e);});
    }
    static get(req,res,next){
        return this.store.get(Service.pathId(req))
            .then(data =>{res.json(data)})
            .catch(e =>{next(e);});
    }
    static update(req,res,next){
        let current = this.store.get(Service.pathId(req));
        let update = Object.assign({},req.body,current);
        return this.store.update(Service.pathId(req),update)
            .then(data =>{res.json(data)})
            .catch(e =>{next(e);});
    }
    static delete(req,res,next){
        return this.store.delete(Service.pathId(req))
            .then(deleted =>{res.sendStatus(204);})
            .catch(e =>{next(e);})
    }
}