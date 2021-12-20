import { Document, Model, model, Schema } from "mongoose";
import { TimeStamps } from "../types/global";
import getTypeAndDefaultValue from "../utils/helpers/getTypeAndDefaultValue";

export interface IUser extends Document, TimeStamps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string | null;
  profileImageUrl: string;
}

const UserSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "User's First name is required"]
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "User's First name is required"]
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email address is required"]
    },
    password: {
      type: String,
      select: false
    },
    phoneNumber: {
      ...getTypeAndDefaultValue(String, null),
      unique: true,
      sparse: true
    },
    profileImageUrl: getTypeAndDefaultValue(
      String,
      "https://ui-avatars.com/api/?firstName=New+User"
    )
  },
  { timestamps: true }
);

const User: Model<IUser> = model("User", UserSchema);

export default User;
