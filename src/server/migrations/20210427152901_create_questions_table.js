// This is a migration for questions table.
exports.up = function (knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments();
    table.string('question').notNullable();
    table.string('image_url');
    table.bool('is_agreement_question');
    table.datetime('created_date').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('questions');
};
