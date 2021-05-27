const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
// moment is no longer recommended. Should we replace with Luxon? https://moment.github.io/luxon/
// const moment = require('moment-timezone');

// This function helps with optimisation and cuts out the requirement for a filter function later.
function groupBy(list, getKey) {
  const result = {};
  list.forEach((item) => {
    const key = getKey(item);

    if (result[key]) {
      result[key].push(item);
    } else {
      const array = [];
      array.push(item);
      result[key] = array;
    }
  });
  return result;
}

const getQuestions = async () => {
  const questions = await knex('questions');

  const answers = await knex('answers').whereIn(
    'fk_question_id',
    questions.map((question) => question.id),
  );

  const answersByQuestion = groupBy(answers, (answer) => answer.fk_question_id);

  return questions.map((question) => ({
    ...question,
    answers: answersByQuestion[question.id],
  }));
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

const createQuestion = async ({ question }) => {
  await knex('questions').insert({ question });

  return {
    successful: true,
  };
};

module.exports = {
  getQuestions,
  getQuestionById,
  createQuestion,
};
