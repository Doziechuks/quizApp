import { AMOUNT_OF_QUESTION, FINAL_SCORE, QUESTION_CATEGORY, QUESTION_DIFFICULTY, QUESTION_TYPE } from "./actionType";

const initial_state = {
  question_category: '',
  question_difficulty: '',
  question_type: '',
  amount_of_question: 50,
  final_score: 0
}

const reducer = (state = initial_state, action) => {
  switch (action.type){
    case QUESTION_CATEGORY:
      return {
        ...state,
        question_category: action.payload
      }
    case QUESTION_DIFFICULTY:
      return {
        ...state,
        question_difficulty: action.payload
      }
    case QUESTION_TYPE:
      return {
        ...state,
        question_type: action.payload
      }
    case AMOUNT_OF_QUESTION:
      return {
        ...state,
        amount_of_question: action.payload
      }
    case FINAL_SCORE:
      return {
        ...state,
        final_score: action.payload
      }
    default:
      return state;
  }
}; 

export default reducer;