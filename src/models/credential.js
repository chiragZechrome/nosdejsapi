const mongoose = require('mongoose');

const CredentialSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  userName: String,
  password: String,
  created_at: Date,
});

CredentialSchema.pre('save', function(next) {
  this.created_at = Date.now();
  next();
});

module.exports = mongoose.model('credential', CredentialSchema);
