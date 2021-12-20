import express, { Router } from "express";
import fetchSingleUser from "../controllers/user/fetchSingleUser";
import deleteUserProfile from "../controllers/user/deleteUser";
import fetchAllUsers from "../controllers/user/fetchAllUsers";
import updateProfileImage from "../controllers/user/updateProfileImages";
import updateUserProfile from "../controllers/user/updateUserProfile";
import requiresSignIn from "../middlewares/auth/requiresSignIn";
import joiMiddleware from "../middlewares/joiMiddleware";

import upload from "../utils/aws";

const userRouter: Router = express.Router();
userRouter.get("/all-users", fetchAllUsers);

userRouter.use(requiresSignIn);

userRouter.get("/single", fetchSingleUser);
userRouter.delete("/delete-user/:id", deleteUserProfile);
userRouter.put(
  "/profile-image",
  upload.single("profileImageUrl"),
  updateProfileImage
);
userRouter.put("/update-user", updateUserProfile);

export default userRouter;
