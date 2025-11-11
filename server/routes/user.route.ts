import express from "express";
import { registerationUser , activateUser } from "../controllers/user.controller";
const UserRouter = express.Router();
UserRouter.post("/registration", registerationUser);
UserRouter.post("/activate-user" , activateUser )
export default UserRouter;
