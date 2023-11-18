import express from 'express';
import userController from '../controllers/userController.js';
const userRouter = express.Router();
userRouter.route('/all').get(userController.getAllUsers);
userRouter.route('/:userId').get(userController.getUser);
export default userRouter;
