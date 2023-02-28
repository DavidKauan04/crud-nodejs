import { Router } from "express";
import { loginSessionController } from "../controllers/geral.controller";

const sessionRouter = Router()

sessionRouter.post('', loginSessionController)

export default sessionRouter;