import { Router } from 'express';
import { getDepartments, getEvents, createDepartment } from '../controllers/college.controller';
import { authenticate } from '../middleware/auth.middleware';
const router = Router();
router.get('/departments', getDepartments);
router.get('/events', getEvents);
router.post('/departments', authenticate, createDepartment); // Only logged in users can add dept
export default router;