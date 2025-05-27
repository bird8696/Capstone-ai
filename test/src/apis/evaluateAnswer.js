export const evaluateAnswerAPI = async ({ role, answerText }) => {
  const res = await fetch("http://localhost:3001/api/evaluate-answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role, answer: answerText }),
  });

  const data = await res.json();

  // ✅ GPT가 생성한 전체 평가 결과만 콘솔에 출력
  console.log("\n🧠 GPT 전체 응답:\n" + data.content);

  return data.content;  // 딱 이거만 반환해도 됨
};
