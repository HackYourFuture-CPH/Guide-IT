const knex = require('../../config/db');

const createQuestion = async ({ question }) => {
  await knex('questions').insert({ question });

  return {
    successful: true,
  };
};
module.exports = {
  createQuestion,
};
