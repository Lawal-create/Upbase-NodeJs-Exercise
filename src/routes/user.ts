import express, { Router } from "express";
import fetchSingleUser from "../controllers/user/fetchSingleUser";
import deleteUserProfile from "../controllers/user/deleteUser";
import fetchAllUsers from "../controllers/user/fetchAllUsers";
import updateProfileImage from "../controllers/user/updateProfileImages";
import updateUserProfile from "../controllers/user/updateUserProfile";
import requiresSignIn from "../middlewares/auth/requiresSignIn";
import joiMiddleware from "../middlewares/joiMiddleware";
import { queryParamsValidator } from "../validators/globalSchemas";

import upload from "../utils/aws";

const userRouter: Router = express.Router();
userRouter.use(requiresSignIn);

userRouter.get("/single", fetchSingleUser);
userRouter.delete("/delete-user", deleteUserProfile);
userRouter.get("/all-users", fetchAllUsers);
userRouter.put(
  "/profile-image",
  upload.single("profileImageUrl"),
  updateProfileImage
);

export default userRouter;
