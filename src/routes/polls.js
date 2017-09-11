import {Router} from 'express';
import PollService from '../services/service';
import Repository from '../repository/sql';
import {getSqliteConnection} from '../util/sqlconnection';
import {getModels} from "../models/index";
const connection = getSqliteConnection(`${__dirname}/../../src/data/polls.sqlite`);
const models = getModels(connection);
const service = new PollService(new Repository(models.poll));
const router = Router();
import {validateNew} from "../middleware/polls/index";

router.post('/',validateNew);
router.route('/')
    .post(service.save)
    .get(service.all);
router.route('/:id')
    .get(service.get)
    .patch(service.update)
    .delete(service.delete);

export default router;



