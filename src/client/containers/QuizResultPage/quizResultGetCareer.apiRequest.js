async function getAnswer(id) {
  const responseFromAnswers = await fetch(`/api/answers/${id}`);
  const answer = await responseFromAnswers.json();
  return answer;
}
async function careerSet(userId) {
  let uxPoints = 0;
  let fullstackPoints = 0;
  let dataAnalystPoints = 0;
  let career;

  const responseFromQuizRequest = await fetch(
    `/api/quiz-results?userId=${userId}`,
  );
  const results = await responseFromQuizRequest.json();
  for (let i = 0; i < results.length; i++) {
    const answer = await getAnswer(results[i]['fk_answer_id']);
    uxPoints += Number(answer.ux_points);
    fullstackPoints += Number(answer.fullstack_points);
    dataAnalystPoints += Number(answer.dataanalyst_points);
  }
  if (uxPoints > fullstackPoints && uxPoints > dataAnalystPoints) {
    career = 'UX designer';
  } else if (fullstackPoints > dataAnalystPoints) {
    career = 'Full stack developer';
  } else if (dataAnalystPoints > 0) {
    career = 'Data analyst';
  } else {
    career = 'Error';
  }
  return career;
}

export async function quizResultGetCareer(userId) {
  const career = await careerSet(userId);

  return career;
}
