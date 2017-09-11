import SQLRepository from '../sql';



export default class VoteRepository extends SQLRepository{
    all(pollId){
        return this.model.findAll({
            where : {
                pollId : pollId
            }
        });
    }
}