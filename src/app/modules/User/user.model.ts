import { model, Schema } from "mongoose";
import { TRole, TUser } from "./user.interface";
import bcrypt from "bcrypt";

const Role: TRole[] = ["user", "admin"];

const UserSchema = new Schema<TUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: [true, "Role is Required"],
      enum: {
        values: Role,
        message: "{VALUES} is not valid role",
        default: "user",
      },
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const saltRounds = 10

UserSchema.pre("save", async function(next){
    const user = this ;
    user.password = await bcrypt.hash(user.password, Number(saltRounds))
    next ()
})

export const UserModel = model<TUser>("User", UserSchema)