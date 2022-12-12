import classes from './textInput.module.css';
import { useState } from 'react';

const TextInput = ({ label, ...otherProps }) => {
  const [value, setValue] = useState(null);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={classes.wrapper}>
      <label>{label}</label>
      <input onChange={handleChange} value={value} {...otherProps} />
      {/* <h1>{value}</h1> */}
    </div>
  );
};

export default TextInput;