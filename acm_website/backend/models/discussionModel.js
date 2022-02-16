const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionName: String,
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answers",
  },
});

const AnswerSchema = new mongoose.Schema({
  answer: String,
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const answerDB = mongoose.model("Answers", AnswerSchema);
const questionDB = mongoose.model("Questions", QuestionSchema);

module.exports = {
	"answerDB": AnswerSchema,
	"questionDB": QuestionSchema
};