import express from "express";
import { registerationUser , activateUser, loginUser, } from "../controllers/user.controller";
const UserRouter = express.Router();
UserRouter.post("/registration", registerationUser);
UserRouter.post("/activate-user" , activateUser );
UserRouter.post("/login", loginUser);
export default UserRouter;
