exports.up = function (knex) {
  return knex.schema.createTable('answers', (table) => {
    table.increments();
    table.string('answer').notNullable();
    table.integer('ux_points').notNullable();
    table.integer('fullstack_points').notNullable();
    table.integer('dataanalyst_points').notNullable();
    table
      .integer('fk_question_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('questions');
    table.datetime('created_date').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  // remove fk in quiz_results table
  return knex.schema
    .alterTable('quiz_results', function (table) {
      table.dropForeign('fk_answer_id');
    })
    .then(() => {
      return knex.schema.dropTable('answers');
    });
};
