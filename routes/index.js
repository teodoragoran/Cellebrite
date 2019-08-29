import { Router } from 'express';

import PhoneController from '../controllers/phone';

const router = Router();

router.get('/phones', PhoneController.getAll);
router.put('/phones/:id', PhoneController.update);
router.post('/phones', PhoneController.create);
router.delete('/phones/:id', PhoneController.delete);

export default router;