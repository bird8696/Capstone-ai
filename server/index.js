// 1. 기본 라이브러리
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// 2. routes 불러오기
import questionRoutes from "./routes/questionRoutes.js";
import evaluationRoutes from "./routes/evaluationRoutes.js";
import selfIntroRoutes from "./routes/selfIntroRoutes.js";
import followupRoutes from "./routes/followupRoutes.js";  
import philosophyQuestionRoute from "./routes/philosophyQuestionRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 3. routes 등록하기
app.use("/api", questionRoutes);
app.use("/api", evaluationRoutes);
app.use("/api", selfIntroRoutes);
app.use("/api", followupRoutes); 
app.use("/api", philosophyQuestionRoute);

// 4. 서버 작동 확인용
app.get("/", (req, res) => {
  res.send("✅ LangChain 서버 정상 작동 중입니다.");
});

// 5. 서버 실행
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ LangChain 백엔드 서버 실행 중 👉 http://localhost:${PORT}`);
});
