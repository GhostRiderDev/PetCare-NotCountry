const experienceSchema = new Schema({
  ocupation: {
    type: String,
    required: true,
    length: 50,
  },
  description: {
    type: String,
    required: true,
    length: 100,
  },
  company: {
    type: String,
    required: true,
    length: 50,
  },
  years: {
    type: Number,
    required: true,
    min: 0,
    max: 50,
  },
});
