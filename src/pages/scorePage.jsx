import CustomButton from '../components/customButton';
import classes from './scorePage.module.css';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAmountOfQuestion, selectFinalScore } from '../redux/selector';
import { handleAmountOfQuestion, handleFinalScore } from '../redux/action';

const ScorePage = ({ finalScore, setFinalScore, amaountOfQuestion, setAmountOfQuestion }) => {
  const navigate = useNavigate();

  const handleBackToSettings = () => {
    setAmountOfQuestion(50);
    setFinalScore(0);
    navigate('/settings')
  };

  return (
    <div className={classes.wrapper}>
      <h1
        className={`${finalScore < Math.floor(amaountOfQuestion / 2) ? classes.low : classes.high}`}
      >
        your final score is: {finalScore}
      </h1>
      <CustomButton onClick={handleBackToSettings}>
        back to settings
      </CustomButton>
    </div>
  );
}
 
const mapStateToProps = createStructuredSelector({
  finalScore: selectFinalScore,
  amaountOfQuestion: selectAmountOfQuestion
});
const mapDispatchToProps = (dispatch) => ({
  setFinalScore: (score) => dispatch(handleFinalScore(score)),
  setAmountOfQuestion: (amount) => dispatch(handleAmountOfQuestion(amount))
});
export default connect(mapStateToProps, mapDispatchToProps)(ScorePage);