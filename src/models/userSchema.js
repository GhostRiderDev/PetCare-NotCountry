import { Schema, model, mongo } from "mongoose";

const userSchema = {
  nickname: {
    type: String,
    minLength: 4,
    maxLength: 14,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    minLength: 5,
    maxLength: 40,
    unique: true,
    required: true,
  },
  password_hash: {
    type: String,
    minLength: 4,
    maxLength: 100,
    required: true,
  },
  role: {
    type: String,
    enum: ["OWNER", "CARER"],
    required: true,
  },
  profile_image: {
    type: String,
    required: false,
    length: 100,
  },
  id_ubication: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ubication",
  },
};

export default userSchema;
