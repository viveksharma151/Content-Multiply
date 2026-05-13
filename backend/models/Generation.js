const mongoose = require('mongoose');

const generationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  originalUrl: {
    type: String
  },
  originalText: {
    type: String
  },
  generatedTwitter: {
    type: String
  },
  generatedLinkedIn: {
    type: String
  },
  generatedNewsletter: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Generation', generationSchema);
