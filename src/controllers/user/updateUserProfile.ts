import User from "../../model/userModel";
import ApiError from "../../middlewares/errorHandler/ApiError";
import { successResponse } from "../../utils/responses";
import { Request, Response, NextFunction } from "express";
import Logger from "../../utils/logger/index";
import formatLog from "../../utils/logger/formatLog";

const updateUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    Logger.info(formatLog(req, "Update User Profile"));
    const userId = String(req.body.user._id);
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return next(new ApiError(404, "User not found"));
    }
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.password = password || user.password;

    await user.save();
    Logger.info(formatLog(req, "Updated User Profile"));
    return successResponse(
      res,
      200,
      "Successfully Updated the User Profile",
      user
    );
  } catch (err) {
    next(err);
  }
};

export default updateUserProfile;
