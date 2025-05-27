export const evaluateSelfIntroAPI = async (answerText) => {
  const res = await fetch("http://localhost:3001/api/evaluate-self-intro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answer: answerText }),
  });

  const { totalScore, followUpQuestions } = await res.json();

  return {
    totalScore,
    followUpQuestions,
  };
};
