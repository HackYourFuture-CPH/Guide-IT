// This is a migration for adding two new columns in questions table.
exports.up = function (knex) {
  return knex.schema.alterTable('questions', (table) => {
    table.string('image_url');
    table.bool('is_agreement_question');
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('questions', (table) => {
    table.dropColumn('image_url');
    table.dropColumn('is_agreement_question');
  });
};
