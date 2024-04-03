import { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    length: 20,
  },
});

const Category = model("Category", categorySchema);
export default Category;
