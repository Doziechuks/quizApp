import { AMOUNT_OF_QUESTION, FINAL_SCORE, QUESTION_CATEGORY, QUESTION_DIFFICULTY, QUESTION_TYPE } from "./actionType";

export const handleQuestionCategory = payload => ({
  type: QUESTION_CATEGORY,
  payload
});
export const handleQuestionDifficulty = payload => ({
  type: QUESTION_DIFFICULTY,
  payload
});
export const handleQuestionType = (payload) => ({
  type: QUESTION_TYPE,
  payload,
});
export const handleAmountOfQuestion = (payload) => ({
  type: AMOUNT_OF_QUESTION,
  payload,
});
export const handleFinalScore = (payload) => ({
  type: FINAL_SCORE,
  payload,
});