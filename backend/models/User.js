const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  stripeCustomerId: {
    type: String
  },
  stripeSubscriptionId: {
    type: String
  },
  stripePriceId: {
    type: String
  },
  stripeCurrentPeriodEnd: {
    type: Date
  },
  generationsCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
