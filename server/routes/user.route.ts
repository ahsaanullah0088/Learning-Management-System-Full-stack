import express from "express";
import { registerationUser , activateUser, loginUser, LogoutUser } from "../controllers/user.controller";
const UserRouter = express.Router();
UserRouter.post("/registration", registerationUser);
UserRouter.post("/activate-user" , activateUser );
UserRouter.post("/login", loginUser);
UserRouter.get('/logout',LogoutUser)
export default UserRouter;
