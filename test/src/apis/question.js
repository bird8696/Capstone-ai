export const generateQuestionsAPI = async ({ role, field, count }) => {
  const res = await fetch("http://localhost:3001/api/question", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role, field, count }),
  });

  const { questions } = await res.json();
  return questions;
};
