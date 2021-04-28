// This is seeding for the questions table.
exports.seed = function (knex) {
  return knex('questions')
    .del()
    .then(function () {
      return knex('questions').insert([
        {
          id: 1,
          question:
            'When visiting a website, what is that you are most interested in?',
          created_date: '2020-05-10 00:00:00',
        },
        {
          id: 2,
          question:
            'I can easily notice changes around me including people, culture, trends, etc.',
          created_date: '2020-05-10 00:00:00',
        },
        {
          id: 3,
          question:
            'When I have a list of tasks to do, I prefer to multitask rather than focusing on singular tasks one at a time',
          created_date: '2020-05-10 00:00:00',
        },
        {
          id: 4,
          question:
            'I can easily understand what someone else is going through',
          created_date: '2020-05-10 00:00:00',
        },
        {
          id: 5,
          question: 'I work well under pressure',
          created_date: '2020-05-10 00:00:00',
        },
      ]);
    });
};
