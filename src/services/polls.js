import Service from './service';
import {generateID} from "../util/utility";
import _ from 'lodash';
import Repository from '../repository/sql';
export default class PollService{
    constructor(models){
        this.models = models;
        this.repository = new Repository(this.models.poll);
    }

    save(poll){
     if (!_.has('id',poll)){
         _.set(poll,'id',generateID());
     }
     return this.repository.save(poll);
    }
    all(){
        return this.repository.all();
    }
    get(id){
        return this.repository.get(id);
    }
    update(id,poll){
        return this.repository.update(id,poll);
    }
    delete(id){
        return this.repository.delete(id);
    }
}