import { Schema } from "mongoose";

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
    length: 50,
  },
  breed: {
    type: String,
    required: false,
    length: 50,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 50,
  },
  weight: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  image_url: {
    type: String,
    required: false,
    length: 100,
  },
  id_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategoryPet",
    required: true,
  },
});

const Pet = model("Pet", petSchema);
export default Pet;
