const knex = require('../../config/db');

const createQuizResults = async (body) => {
  await knex('quiz_results').insert({
    fk_answer_id: body.fk_answer_id,
    fk_user_id: body.fk_user_id,
  });

  return {
    successful: true,
  };
};

const getQuizResults = async (answerId, userId) => {
  try {
    let filteredResults;
    if (answerId !== undefined && userId !== undefined) {
      filteredResults = await knex('quiz_results')
        .where('fk_answer_id', '=', answerId)
        .where('fk_user_id', '=', userId)
        .select('id', 'fk_answer_id', 'fk_user_id', 'created_date');
    } else if (answerId !== undefined) {
      filteredResults = await knex('quiz_results')
        .where('fk_answer_id', '=', answerId)
        .select('id', 'fk_answer_id', 'fk_user_id', 'created_date');
    } else if (userId !== undefined) {
      // get total number of questions from questions table.
      const numberOfQuestions = (await knex('questions').count())[0][
        'count(*)'
      ];
      // Get latest records with userid from quiz_results upto to numberOfQuestions
      filteredResults = await knex('quiz_results')
        .where('fk_user_id', '=', userId)
        .orderBy('created_date', 'desc')
        .limit(Number(numberOfQuestions));
    } else {
      filteredResults = await knex('quiz_results').select(
        'id',
        'fk_answer_id',
        'fk_user_id',
        'created_date',
      );
    }
    return filteredResults;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getQuizResults,
  createQuizResults,
};
