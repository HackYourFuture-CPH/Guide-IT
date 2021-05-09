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

/**
 * @swagger
 * /quiz-results:
 *  post:
 *    tags:
 *    - Quiz Results
 *    summary: Create a quiz result
 *    description:
 *      Will insert a quiz result entry.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: Quiz Results
 *        description: The quiz result to create.
 *        schema:
 *          type: object
 *          required:
 *            - fk_answer_id
 *            - fk_user_id
 *          properties:
 *            fk_answer_id:
 *              type: integer
 *            fk_user_id:
 *              type: integer
 *    responses:
 *      201:
 *        description: Quiz results created
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res) => {
  quizResultsController
    .createQuizResults(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
