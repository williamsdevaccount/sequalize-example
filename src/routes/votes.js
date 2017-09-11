import {Router} from 'express';
import PollService from '../services/votes';
import Repository from '../repository/votes/sql';
import {getSqliteConnection} from '../util/sqlconnection';
import {getModels} from "../models/index";
const connection = getSqliteConnection(`${__dirname}/../../src/data/polls.sqlite`);
const models = getModels(connection);
const service = new PollService(new Repository(models.vote));
const router = Router();


router.route('/:poll')
    .post(service.save)
    .get(service.all);

export default router;
