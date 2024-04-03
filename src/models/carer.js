import { Schema } from "mongoose";
import userSchema from "./userSchema";

const carerSchema = new Schema({
  ...userSchema,
  role: {
    type: String,
    enum: ["CARER"],
    required: true,
  },
  phone: {
    type: String,
    minLength: 8,
    maxLength: 14,
    required: true,
  },
  id_availability: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Availability",
    required: false,
  },
  ids_experiences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Experience",
      required: false,
    },
  ],
  ids_services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: false,
    },
  ],
  ids_reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
      required: false,
    },
  ],
});

const Carer = model("Carer", carerSchema);
export default Carer;
