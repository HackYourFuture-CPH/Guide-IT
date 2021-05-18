const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getAnswers = async () => {
  return knex('answers');
};

const getAnswerById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const answer = await knex('answers').where({ id });
    if (answer.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return answer[0];
  } catch (error) {
    return error.message;
  }
};

const deleteAnswer = async (answersId) => {
  return knex('answers').where({ id: answersId }).del();
};
const createNewAnswer = async (body) => {
  await knex('answers').insert({
    answer: body.answer,
    ux_points: body.ux_points,
    fullstack_points: body.fullstack_points,
    dataanalyst_points: body.dataanalyst_points,
    fk_question_id: body.fk_question_id,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getAnswers,
  getAnswerById,
  deleteAnswer,
  createNewAnswer,
};
