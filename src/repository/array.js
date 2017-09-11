import Promise from 'bluebird';
import _ from 'lodash';

export default class ArrayRepository{
    constructor(){
        this.store = {};
    }
    save(data){
        _.set(this.store,_.get(data,'id',_.keys(this.store).length),data);
        return Promise.resolve(data);
    }
    all(){
        return Promise.resolve(_.values(this.store));
    }
    get(id){
        return Promise.resolve(_.get(this.store,id,{}));
    }
    update(id,data){
        _.set(this.store,id,data);
        return Promise.resolve(data);
    }
    remove(id){
        _.unset(this.store,id);
        return Promise.resolve(true);
    }
}