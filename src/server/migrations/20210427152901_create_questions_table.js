// This is a migration for questions table.
exports.up = function (knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments();
    table.string('question').notNullable();
    table.datetime('created_date').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  // Remove fk in answers table
  return knex.schema
    .alterTable('answers', function (table) {
      table.dropForeign('fk_question_id');
    })
    .then(() => {
      return knex.schema.dropTable('questions');
    });
};
