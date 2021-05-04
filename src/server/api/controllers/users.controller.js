const knex = require('../../config/db');

const getUsers = async () => {
  return knex('users').select(
    'users.id',
    'users.full_name',
    'users.firebase_token',
  );
};

module.exports = {
  getUsers,
};
