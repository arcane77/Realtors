import express from 'express';
import { test } from '../controller/user.controller.js';
import { signup,signin,signout } from '../controller/auth.controller.js';
import { google } from '../controller/auth.controller.js';

const router=express.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google', google);
router.get('/signout', signout);

export default router;