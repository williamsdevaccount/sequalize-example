import {Router} from 'express';
import polls from './polls';
import users from './users';
import votes from './votes';

const router = Router();
router.use('/polls',polls);
router.use('/users',users);
router.use('/votes',votes);
export default router;