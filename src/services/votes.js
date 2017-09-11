
import Service from './service';
import _ from 'lodash';
export default class VoteService extends Service{
    static PollId(req){
        return _.get(req.params,'poll');
    }
    save(req,res,next){
        let pollId = VoteService.PollId(req);
        let vote = req.body;
        _.set(vote,'pollId',pollId);
        _.set(vote,'id',VoteService.id());
        return this.store.save(vote)
            .then(data =>{res.json(data)})
            .catch(e =>{next(e);});
    }
    all(req,res,next){
        let pollId = VoteService.PollId(req);
        return this.store.all(pollId)
            .then(data =>{res.json(data)})
            .catch(e =>{next(e)});
    }
}