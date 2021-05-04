const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users.controller');

/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *    - users
 *    summary: Get all users
 *    description:
 *      Will return all users.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  usersController
    .getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users/{ID}:
 *  get:
 *    tags:
 *    - users
 *    summary: Get user by ID
 *    description:
 *      Will return single user with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the user to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  usersController
    .getUserById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
