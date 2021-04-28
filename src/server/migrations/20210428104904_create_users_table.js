// Test migration
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('user').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
