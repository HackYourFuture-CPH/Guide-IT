const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const quizResultsController = require('../controllers/quiz_results.controller');

/**
 * @swagger
 * /quiz-results:
 *  post:
 *    tags:
 *    - quiz_results
 *    summary: Create a quiz result
 *    description:
 *      Will create a quiz result.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: quiz_results
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
