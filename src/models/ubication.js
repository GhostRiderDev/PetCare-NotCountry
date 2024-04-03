import { Schema } from "mongoose";

const ubicationSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Ubication = model("Ubication", ubicationSchema);
export default Ubication;
