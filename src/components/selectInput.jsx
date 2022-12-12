import { useState } from 'react';
import classes from './selectInput.module.css';

const SelectInput = ({ label, name, options, ...otherProps }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className={classes.wrapper}>
      <label>{label}</label>
      <select name={name} value={value} onChange={handleChange} {...otherProps}>
        <option value="option one">option 1</option>
        <option value="option two">option 2</option>
        <option value="option three">option 3</option>
      </select>
      {/* <h1>{value}</h1> */}
    </div>
  );
}
 
export default SelectInput;