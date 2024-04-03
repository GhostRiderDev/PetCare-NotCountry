import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
    length: 30,
  },
  description: {
    type: String,
    required: true,
    length: 100,
  },
  price_hour: {
    type: Number,
    required: true,
    min: 0,
    max: 100000.0,
  },
  categoryPet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategoryPet",
    required: true,
  },
});

const Service = model("Service", serviceSchema);
export default Service;
