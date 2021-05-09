const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const questionsController = require('../controllers/questions.controller');

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
    .catch((error) => {
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
