const express = require("express");
const router = express.Router();

const {getAllQuestionsAnswers, postQuestion, postAnswer} = require("../controllers/DiscussionForum/discussion");
const auth = require("../middleware/auth");

router.get('/questions', auth, getAllQuestionsAnswers);
router.post('/questions', auth, postQuestion);
router.post('/answers', auth, postAnswer);

module.exports = router;
