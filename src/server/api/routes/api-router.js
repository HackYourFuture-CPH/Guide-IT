const express = require('express');

const router = express.Router();

// Router imports

const answersRouter = require('./answers.router');
const usersRouter = require('./users.router');
const quizResultsRouter = require('./quiz-results.router');

const questionsRouter = require('./questions.router');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {},
  apis: ['./src/server/api/routes/*.js'],
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes

router.use('/answers', answersRouter);

router.use('/users', usersRouter);
router.use('/quiz-results', quizResultsRouter);

router.use('/quiz-results', quizResultsRouter);

router.use('/questions', questionsRouter);

router.use('/questions', questionsRouter);

module.exports = router;
