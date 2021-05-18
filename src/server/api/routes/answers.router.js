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
 *     - answers
 *    summary: Create a answer
 *    description:
 *      Will create a answer.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: answer
 *        description: The answer to create.
 *        schema:
 *          type: object
 *          required:
 *            - answer
 *            - ux_points
 *            - fullstack_points
 *            - dataanalyst_points
 *            - fk_question_id
 *          properties:
 *            answer:
 *              type: string
 *            ux_points:
 *              type: integer
 *            fullstack_points:
 *              type: integer
 *            dataanalyst_points:
 *              type: integer
 *            fk_question_id:
 *              type: integer
 *    responses:
 *      201:
 *        description: answer created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  answersController
    .createNewAnswer(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

/**
 * @swagger
 * /answers/{ID}:
 *  delete:
 *    tags:
 *    - answers
 *    summary: Delete a answer
 *    description:
 *      Will delete a answer with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the answer to delete.
 *    responses:
 *      200:
 *        description: answer deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  answersController
    .deleteAnswer(req.params.id, req)
    .then((result) => {
      if (result === 0) {
        res.status(404).send('The answer ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
