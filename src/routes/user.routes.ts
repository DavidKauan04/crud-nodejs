import { Router } from "express";
import { CreateUserController, deleteUserController, listUsersController, updatedUserController } from "../controllers/geral.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureAuthIsAdmMiddleware from "../middlewares/ensureAuthIsAdm.middleware";

const userRouter = Router()

userRouter.post('', CreateUserController)
userRouter.get('', ensureAuthMiddleware, ensureAuthIsAdmMiddleware, listUsersController)
userRouter.patch('/:id', ensureAuthMiddleware, ensureAuthIsAdmMiddleware, updatedUserController)
userRouter.delete('/:id', ensureAuthMiddleware, ensureAuthIsAdmMiddleware, deleteUserController)








export default userRouter;