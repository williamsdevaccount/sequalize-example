import {getSqliteConnection} from "../util/sqlconnection";
import {getModels} from "../models/index";
const connection = getSqliteConnection(`${__dirname}/../data/polls.sqlite`);

const models = getModels(connection);


models.vote.sync().then(()=>{console.log('votes synched')}).catch((err)=>{console.log('VOTES ERR : ',err.message)});
models.user.sync().then(()=>{console.log('users synched')}).catch((err)=>{console.log('USERS ERR : ',err.message)});
models.poll.sync().then(()=>{console.log('polls synched')}).catch((err)=>{console.log('POLLS ERR : ',err.message)});
models.choice.sync().then(()=>{console.log('choice synched')}).catch((err)=>{console.log('CHOICE ERR : ',err.message)});
models.comment.sync().then(()=>{console.log('comments synched')}).catch((err)=>{console.log('COMMENTS ERR : ',err.message)});