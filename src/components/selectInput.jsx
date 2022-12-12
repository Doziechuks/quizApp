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
 
export default SelectInput;