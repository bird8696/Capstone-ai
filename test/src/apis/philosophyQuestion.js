// src/api/philosophyQuestion.js

/**
 * POST /api/philosophy-question 호출하여 회사 철학 질문 생성
 * @param {string} introText - 지원자의 자기소개 텍스트
 * @returns {Promise<string>} - 생성된 질문 문자열
 */
export const generateCompanyPhilosophyQuestionAPI = async (introText) => {
  const res = await fetch("http://localhost:3001/api/philosophy-question", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: introText }),
  });

  // 에러 응답 처리
  if (!res.ok) {
    // JSON 에러 메시지가 아닐 수 있으니 파싱 시도
    const errData = await res.json().catch(() => ({}));
    const msg = errData.error || `philosophy-question 요청 실패: ${res.status}`;
    throw new Error(msg);
  }

  // 정상 응답
  const { question } = await res.json();
  return question;
};