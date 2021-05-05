const knex = require('../../config/db');

const createQuestion = async (body) => {
  await knex('questions').insert({
    question: body.question,
  });

  return {
    successful: true,
  };
};
module.exports = {
  createQuestion,
};
