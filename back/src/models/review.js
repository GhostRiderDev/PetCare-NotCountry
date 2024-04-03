import Schema from "mongoose";

const reviewSchema = new Schema({
  id_owner: {
    type: Schema.Types.ObjectId,
    ref: "Owner",
    required: true,
  },
  id_carer: {
    type: Schema.Types.ObjectId,
    ref: "Carer",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  comment: {
    type: String,
    required: false,
    length: 100,
  },
});

const Review = model("Review", reviewSchema);
export default Review;
