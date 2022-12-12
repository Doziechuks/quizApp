import { createSelector } from "reselect";

const questionSelector = state => state.question;

export const selectQuestionCategory = createSelector(
  [questionSelector],
  (question) => question.question_category
);
export const selectQuestionDifficulty = createSelector(
  [questionSelector],
  (question) => question.question_difficulty
);
export const selectQuestionType = createSelector(
  [questionSelector],
  (question) => question.question_type
);
export const selectAmountOfQuestion = createSelector(
  [questionSelector],
  (question) => question.amount_of_question
);
export const selectFinalScore = createSelector(
  [questionSelector],
  (question) => question.final_score
);