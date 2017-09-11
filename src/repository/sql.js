import Promise from 'bluebird';

export default class SqlRepository {
    constructor(model = {}) {
        this.model = model;
    }

    sync() {
        return this.model.sync()
            .then(() => {
                return Promise.resolve(true);
            }).catch(err => {
            console.error(err);
            return Promise.resolve(false);
        });
    }
    save(data){
        return this.model.create(data);
    }
    saveMany(collection){
        return this.model.bulkCreate(collection);
    }
    all(){
        return this.model.all();
    }
    get(id){
        return this.model.findById(id);
    }
    update(id,data){
        return this.model.update(data,{
            where : {
                id : id
            }
        });
    }
    delete(id){
        return this.model.destroy({
            where : {
                id : id
            }
        });
    }
}