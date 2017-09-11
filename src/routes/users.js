import {Router} from 'express';
import UserService from '../services/users';
import Repository from '../repository/sql';
import {getSqliteConnection} from '../util/sqlconnection';
import {getModels} from "../models/index";
const connection = getSqliteConnection(`${__dirname}/../../src/data/polls.sqlite`);
const models = getModels(connection);
const service = new UserService(new Repository(models.user));
const router = Router();


router.route('/')
    .post(service.save)
    .get(service.all);

router.route('/:id')
    .get(service.get)
    .patch(service.update)
    .delete(service.delete);

export default router;
