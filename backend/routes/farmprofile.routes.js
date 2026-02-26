import express from 'express'
const router = new express();
import multer from 'multer';

import { getFarmProfile, updateProfile } from '../controller/farmprofile.controller.js';
import auth from '../middlewares/auth.middleware.js';
import upload from '../middlewares/upload.middleware.js';

router.get('/me', auth, getFarmProfile);

router.put(
  "/update",
  auth,
  upload.single("avatar"),
  updateProfile
);

export default router