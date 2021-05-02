// This is a migration for Quiz Results table

exports.up = function (knex) {
  return knex.schema.createTable('quiz_results', (table) => {
    table.increments();
    table.integer('fk_answer_id').unsigned().notNullable();
    table.foreign('fk_answer_id').references('answers.id');
    table.integer('fk_user_id').unsigned().notNullable();
    table.foreign('fk_user_id').references('users.id');
    table.datetime('created_date').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('quiz_results');
};
