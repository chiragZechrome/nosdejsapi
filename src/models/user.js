const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  userId: {
    type: Number,
    unique: true,
    required: true,
  },
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  gender: String,
  hobbies: Array,
  dob: Date,
  country: String,
  state: String,
  city: String,
  selected: Boolean,
});

module.exports = mongoose.model('user', UserSchema);
