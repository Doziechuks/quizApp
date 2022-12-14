import classes from './textInput.module.css';
import { connect } from 'react-redux';
import { handleAmountOfQuestion } from '../redux/action';

const TextInput = ({ label, setAmountOfQuestion, ...otherProps }) => {
  const handleChange = (e) => {
    setAmountOfQuestion(e.target.value);
  };
  return (
    <div className={classes.wrapper}>
      <label>{label}</label>
      <input onChange={handleChange} {...otherProps} />
    </div>
  );
};


const mapDispatchToProps =(dispatch) => ({
  setAmountOfQuestion: (amount) => dispatch(handleAmountOfQuestion(amount)) 
});

export default connect(null, mapDispatchToProps)(TextInput);