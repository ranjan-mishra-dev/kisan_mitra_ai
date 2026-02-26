import express from 'express'
const router = express.Router();
import { googleAuth, authMe, logout } from '../controller/auth.controller.js';
import auth from '../middlewares/auth.middleware.js';

//by google login, first hit this api
router.post('/google', googleAuth);
router.get('/me', auth, authMe);
router.post('/logout', auth, logout);

export default router;