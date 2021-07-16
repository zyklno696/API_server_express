import {Router} from 'express';
import {getAll} from '../controllers/servers.js';
import {getImages} from '../controllers/servers.js';

const router = Router();


router.get('/api/server', getAll);
router.get('/api/images', getImages);

export default router