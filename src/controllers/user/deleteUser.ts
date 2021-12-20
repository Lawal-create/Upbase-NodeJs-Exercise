import User from "../../model/userModel";
import ApiError from "../../middlewares/errorHandler/ApiError";
import { successResponse } from "../../utils/responses";
import { Request, Response, NextFunction } from "express";
import Logger from "../../utils/logger/index";
import formatLog from "../../utils/logger/formatLog";

const deleteUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    Logger.info(formatLog(req, "Delete a user account"));
    const userId: string = req.params.id;
    const deletedUser = await User.findByIdAndDelete({ _id: userId });
    Logger.info(formatLog(req, "Successfully deleted a user"));
    return successResponse(res, 200, "Succesfully deleted a user", deletedUser);
  } catch (err) {
    next(err);
  }
};

export default deleteUserProfile;
