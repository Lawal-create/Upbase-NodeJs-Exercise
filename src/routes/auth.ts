import express, { Router } from "express";
import signupUser from "../controllers/auth/signup";
import loginUser from "../controllers/auth/login";
import joiMiddleware from "../middlewares/joiMiddleware";
import upload from "../utils/aws";
import { signupValidator, loginValidator } from "../validators/authSchemas";

const authRouter: Router = express.Router();

//auth routes
authRouter.post("/login", joiMiddleware(loginValidator), loginUser);

authRouter.post(
  "/signup",
  upload.single("profileImageUrl"),
  joiMiddleware(signupValidator),
  signupUser
);

export default authRouter;
