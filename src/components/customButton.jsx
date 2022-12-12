import classes from './customButton.module.css';

const CustomButton = ({ children, isSettings, ...otherProps }) => {
  return ( 
    <button className={`${classes.button} ${isSettings ? classes.settings : ''}`} { ...otherProps }>{children}</button>
   );
}
 
export default CustomButton;