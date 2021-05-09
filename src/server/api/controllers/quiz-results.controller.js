const knex = require('../../config/db');

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
      filteredResults = await knex('quiz_results')
        .where('fk_user_id', '=', userId)
        .select('id', 'fk_answer_id', 'fk_user_id', 'created_date');
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
};
