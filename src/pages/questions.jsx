import CustomButton from '../components/customButton';
import classes from './questions.module.css';

const QuestionsPage = () => {
  return (
    <div className={classes.wrapper}>
      <h1>question 1</h1>
      <div className={classes.container}>
        <p className={classes.question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quo pariatur obcaecati minima praesentium nobis accusamus error vero aspernatur modi quos, soluta ducimus? Dicta deleniti doloremque quo corrupti asperiores in!</p>
        <div className={classes.options}>
          <CustomButton isQuestion>option a</CustomButton>
          <CustomButton isQuestion>option a</CustomButton>
          <CustomButton isQuestion>option a</CustomButton>
          <CustomButton isQuestion>option a</CustomButton>
        </div>
      </div>
      <p className={classes.score}>score: 1 / 6</p>
    </div>
  );
}
 
export default QuestionsPage;