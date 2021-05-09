const knex = require('../../config/db');

const createUser = async (body) => {
  await knex('users').insert({
    full_name: body.full_name,
    firebase_token: body.firebase_token,
  });
  return {
    successful: true,
  };
};

module.exports = {
  createUser,
};
