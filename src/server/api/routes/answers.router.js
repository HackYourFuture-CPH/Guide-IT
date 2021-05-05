const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const answersController = require('../controllers/answers.controller');

/**
 * @swagger
 * /answers:
 *  get:
 *    tags:
 *    - answers
 *    summary: Get all answers
 *    description:
 *      Will return all answers.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  answersController
    .getAnswers()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /answers/{ID}:
 *  get:
 *    tags:
 *    - answers
 *    summary: Get answer by ID
 *    description:
 *      Will return single answer with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the answer to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  answersController
    .getAnswerById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /answers:
 *  post:
 *    tags:
 *    - answers
 *    summary: Create an answer
 *    description:
 *      Will create an answer.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: answer
 *        description: The answer to create.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - startDate
 *            - endDate
 *             - classId
 *          properties:
 *            title:
 *              type: string
 *            startDate:
 *              type: string
 *              format: date-time
 *            endDate:
 *              type: string
 *              format: date-time
 *            classId:
 *              type: string
 *    responses:
 *      201:
 *        description: Answer created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  answersController
    .createAnswer(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
