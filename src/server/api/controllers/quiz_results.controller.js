const knex = require('../../config/db');

const createQuizResults = async (body) => {
  await knex('quiz_results').insert({
    // id: body.id,
    fk_answer_id: body.fk_answer_id,
    fk_user_id: body.fk_user_id,
  });

  return {
    successful: true,
  };
};

module.exports = {
  createQuizResults,
};
