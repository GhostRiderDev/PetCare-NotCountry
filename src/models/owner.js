import { Schema } from "mongoose";
import userSchema from "./userSchema";

const ownerSchema = new Schema({
  ...userSchema,
  role: {
    type: String,
    enum: ["OWNER"],
    required: true,
  },
  ids_pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
      required: false,
    },
  ],
});

const Owner = model("Owner", ownerSchema);
export default Owner;
