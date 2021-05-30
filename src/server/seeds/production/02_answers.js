exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('answers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {
          id: 1,
          answer: 'How the website looks and how easy it is for the users',
          ux_points: 2,
          fullstack_points: 0,
          dataanalyst_points: 0,
          fk_question_id: 1,
        },
        {
          id: 2,
          answer: 'Logic behind how the website is built',
          ux_points: 0,
          fullstack_points: 2,
          dataanalyst_points: 0,
          fk_question_id: 1,
        },
        {
          id: 3,
          answer: 'Agree (yes)',
          ux_points: 2,
          fullstack_points: 0,
          dataanalyst_points: 0,
          fk_question_id: 2,
        },
        {
          id: 4,
          answer: 'Maybe',
          ux_points: 1,
          fullstack_points: 0,
          dataanalyst_points: 0,
          fk_question_id: 2,
        },
        {
          id: 5,
          answer: 'Agree (yes)',
          ux_points: 0,
          fullstack_points: 2,
          dataanalyst_points: 0,
          fk_question_id: 3,
        },
        {
          id: 6,
          answer: 'Maybe',
          ux_points: 0,
          fullstack_points: 1,
          dataanalyst_points: 0,
          fk_question_id: 3,
        },
        {
          id: 7,
          answer: 'Agree (yes)',
          ux_points: 2,
          fullstack_points: 0,
          dataanalyst_points: 0,
          fk_question_id: 4,
        },
        {
          id: 8,
          answer: 'Maybe',
          ux_points: 1,
          fullstack_points: 0,
          dataanalyst_points: 0,
          fk_question_id: 4,
        },
        {
          id: 9,
          answer: 'Agree (yes)',
          ux_points: 0,
          fullstack_points: 2,
          dataanalyst_points: 0,
          fk_question_id: 5,
        },
        {
          id: 10,
          answer: 'Maybe',
          ux_points: 0,
          fullstack_points: 1,
          dataanalyst_points: 0,
          fk_question_id: 5,
        },
      ]);
    });
};
