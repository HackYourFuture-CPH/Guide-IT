// This is a migration for Quiz Results table

exports.up = function (knex) {
  return knex.schema.createTable('quiz_results', (table) => {
    table.increments();
    table.integer('fk_answer_id').unsigned().notNullable();
    table.integer('fk_user_id').unsigned().notNullable();
    table.datetime('created_date').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('quiz_results');
};

// TODO: Add foreign keys when users and answers tables will be created
