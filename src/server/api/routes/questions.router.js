const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const questionsController = require('../controllers/questions.controller');

/**
 * @swagger
 * /questions:
 *  get:
 *    tags:
 *    - Questions
 *    summary: Get all questions
 *    description:
 *      Will return all questions.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  questionsController
    .getQuestions()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /questions/{ID}:
 *  get:
 *    tags:
 *    - Questions
 *    summary: Get question by ID
 *    description:
 *      Will return single question with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the question to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  questionsController
    .getQuestionById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});
/**
 * @swagger
 * /questions:
 *  post:
 *    tags:
 *    - Questions
 *    summary: Create a question
 *    description:
 *      Will create a question.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: question
 *        description: The qustion to create.
 *        schema:
 *          type: object
 *          required: true
 *          description: The text of the question to create.
 *            - question
 *
 *          properties:
 *            question:
 *              type: string
 *
 *    responses:
 *      201:
 *        description: Qustion created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  questionsController
    .createQuestion(req.body)
    .then((result) => res.json(result))
    .catch(() => {
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
