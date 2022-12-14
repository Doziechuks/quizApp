import classes from "./questions.module.css";

import CustomButton from "../components/customButton";
import Loader from "../components/loader";
import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { decode } from "html-entities";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectAmountOfQuestion,
  selectFinalScore,
  selectQuestionCategory,
  selectQuestionDifficulty,
  selectQuestionType,
} from "../redux/selector";
import { handleFinalScore } from "../redux/action";

const getRandomNumber = (max) => {
  return Math.floor(Math.random * Math.floor(max));
};

const QuestionsPage = (props) => {
  const {
    questionCategory,
    questionDifficulty,
    questionType,
    amountOfQuestion,
    finalScore,
    setFinalScore,
  } = props;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  let apiUrl = `/api.php?amount=${amountOfQuestion}`;
  if (questionCategory) {
    apiUrl = apiUrl.concat(`&category=${questionCategory}`);
  }
  if (questionDifficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`);
  }
  if (questionType) {
    apiUrl = apiUrl.concat(`&type=${questionType}`);
  }

  const { response, error, loading } = useFetch({ url: apiUrl });

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      setFinalScore(finalScore + 1);
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/finalscore");
    }
  };

  useEffect(() => {
    if (response && response.results.length) {
      const question = response.results[questionIndex];
      const answers = [...question.incorrect_answers];
      answers.splice(
        getRandomNumber(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1>something went wrong</h1>;
  }

  return (
    <div className={classes.wrapper}>
      <h1>challenge {questionIndex + 1}</h1>
      <div className={classes.container}>
        <p className={classes.question}>
          {decode(response && response.results[questionIndex].question)}
        </p>
        <div className={classes.options}>
          {options &&
            options.map((option, id) => {
              return (
                <CustomButton key={id} onClick={handleClickAnswer} isQuestion>
                  {decode(option)}
                </CustomButton>
              );
            })}
        </div>
      </div>
      <p className={classes.score}>
        score: {finalScore} / {amountOfQuestion}
      </p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  questionCategory: selectQuestionCategory,
  questionDifficulty: selectQuestionDifficulty,
  questionType: selectQuestionType,
  amountOfQuestion: selectAmountOfQuestion,
  finalScore: selectFinalScore,
});
const mapDispatchToProps = (dispatch) => ({
  setFinalScore: (score) => dispatch(handleFinalScore(score)),
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
