import { useState } from 'react';
import classes from './selectInput.module.css';

import { connect } from 'react-redux';
import { handleQuestionCategory, handleQuestionDifficulty, handleQuestionType } from '../redux/action';

const SelectInput = ({ label, name, options,setQuestionCategory, setQuestionDifficulty, setQuestionType, ...otherProps }) => {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);

    switch(label) {
      case 'Category':
        setQuestionCategory(e.target.value);
        break;
      case 'Difficulty':
        setQuestionDifficulty(e.target.value);
        break;
      case 'Type':
        setQuestionType(e.target.value);
        break;
      default:
        return;
    }
  }
  return (
    <div className={classes.wrapper}>
      <label>{label}</label>
      <select name={name} value={value} onChange={handleChange} {...otherProps}>
        {
          options && options.map((option) => {
            const {id, name} = option;
            return <option key={id} value={id}>{name}</option>;
          })
        }
      </select>
      {/* <h1>{value}</h1> */}
    </div>
  );
}
 
const mapDispatchToProps = (dispatch) => ({
  setQuestionCategory: (category) => dispatch(handleQuestionCategory(category)),
  setQuestionDifficulty: (difficulty) => dispatch(handleQuestionDifficulty(difficulty)),
  setQuestionType: (type) => dispatch(handleQuestionType(type))
});
export default connect(null, mapDispatchToProps)(SelectInput);