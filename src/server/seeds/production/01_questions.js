// This is seeding for the questions table.
exports.seed = function (knex) {
  return knex('answers')
    .del()
    .then(() => {
      return knex('questions').del();
    })
    .then(function () {
      return knex('questions').insert([
        {
          id: 1,
          question:
            'When visiting a website, what is that you are most interested in?',
          image_url:
            'src/client/assets/images/questionBackgrounds/question1background.png',
          is_agreement_question: false,
          created_date: '2020-05-10 00:00:00',
        },
        {
          id: 2,
          question:
            'I can easily notice changes around me including people, culture, trends, etc.',
          image_url:
            'src/client/assets/images/questionBackgrounds/question2background.png',
          is_agreement_question: true,
          created_date: '2020-05-10 00:00:00',
        },
        {
          id: 3,
          question:
            'When I have a list of tasks to do, I prefer to multitask rather than focusing on singular tasks one at a time',
          image_url:
            'src/client/assets/images/questionBackgrounds/question3background.png',
          is_agreement_question: true,
          created_date: '2020-05-10 00:00:00',
        },
        {
          id: 4,
          question:
            'I can easily understand what someone else is going through',
          image_url:
            'src/client/assets/images/questionBackgrounds/question4background.png',
          is_agreement_question: true,
          created_date: '2020-05-10 00:00:00',
        },
        {
          id: 5,
          question: 'I work well under pressure',
          image_url:
            'src/client/assets/images/questionBackgrounds/question5background.png',
          is_agreement_question: true,
          created_date: '2020-05-10 00:00:00',
        },
      ]);
    });
};
