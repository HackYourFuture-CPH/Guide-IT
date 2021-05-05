const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getAnswers = async () => {
  return knex('answers').select('answers.id', 'answers.answer');
};

const getAnswerById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const answers = await knex('answers')
      .select('answers.id as id', 'answer')
      .where({ id });
    if (answers.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return answers;
  } catch (error) {
    return error.message;
  }
};

const deleteAnswer = async (answersId) => {
  return knex('answers').where({ id: answersId }).del();
};

module.exports = {
  getAnswers,
  getAnswerById,
  deleteAnswer,
};
