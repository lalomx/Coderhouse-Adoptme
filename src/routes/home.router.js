import { Router} from 'express';
import homeController from '../controllers/home.controller.js';

const router = Router();

router.get('/', homeController.renderHome);

router.get('/pets', homeController.renderPets);

router.get('/users', homeController.renderusers);

export default router;