const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
// moment is no longer recommended. Should we replace with Luxon? https://moment.github.io/luxon/
// const moment = require('moment-timezone');

const getQuestions = async () => {
  return knex('questions').select('questions.id', 'questions.question');
};

const getQuestionById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const questions = await knex('questions')
      .select('questions.id as id', 'question')
      .where({ id });
    if (questions.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return questions[0];
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getQuestions,
  getQuestionById,
};
