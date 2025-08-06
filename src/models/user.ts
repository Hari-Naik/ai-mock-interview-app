import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  email: string;
  password: string;
  profilePic?: string;
  firstName?: string;
  lastName?: string;
  language?: string;
  currentPosition?: string;
  company?: string;
  skills?: string[];
  experience?: number;
  about?: string;
  educationDetails?: {
    college: string;
    degree: string;
  };
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    language: {
      type: String,
    },
    currentPosition: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    skills: {
      type: [String],
      default: [],
    },
    experience: {
      type: Number,
      min: 0,
      default: 0,
    },
    about: {
      type: String,
      maxlength: 1000,
      trim: true,
    },
    educationDetails: {
      college: {
        type: String,
        trim: true,
      },
      degree: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error as Error);
  }
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
