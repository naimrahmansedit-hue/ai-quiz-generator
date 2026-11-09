const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  score: { type: Number, required: true }, // percentage
  totalQuestions: Number,
  correctAnswers: Number,
  weakTopics: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Result', resultSchema);
