import { Schema } from "mongoose";

const availabilitySchema = new Schema({
  days: {
    type: [String],
    required: true,
  },
  hours: {
    type: [String],
    required: true,
  },
});

const Availability = model("Availability", availabilitySchema);
export default Availability;
