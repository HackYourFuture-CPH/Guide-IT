const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getUsers = async () => {
  return knex('users').select(
    'users.id',
    'users.full_name',
    'users.firebase_token',
  );
};

const getUserById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const result = await knex('users')
      .select('users.id as id', 'full_name', 'firebase_token')
      .where({ id });
    const user = result.length !== 0 ? result[0] : '';
    if (!user) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return user;
  } catch (error) {
    return error.message;
  }
};

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
  getUsers,
  getUserById,
};
