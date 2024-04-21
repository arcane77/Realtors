import express from 'express';
import { test,getUserListings,getUser } from '../controller/user.controller.js';
import { deleteUser } from '../controller/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router=express.Router();

router.get('/test',test);
router.delete('/delete/:id',verifyToken,deleteUser)
router.get('/listings/:id',verifyToken,getUserListings)
router.get('/:id',verifyToken,getUser)

export default router;