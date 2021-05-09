const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const quizResultsController = require('../controllers/quiz-results.controller');

/**
 * @swagger
 * /quiz-results:
 *  get:
 *    tags:
 *    - Quiz Results
 *    summary: Get quiz results
 *    description:
 *      Will return quiz results.
 *    produces: application/json
 *    parameters:
 *      - in: query
 *        name: answerId
 *        type: integer
 *        required: false
 *        description: The id of the answer.
 *      - in: query
 *        name: userId
 *        type: integer
 *        required: false
 *        description: The id of the user.
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  const [answerId, userId] = [req.query.answerId, req.query.userId];

  quizResultsController
    .getQuizResults(answerId, userId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
