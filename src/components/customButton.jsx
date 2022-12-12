import classes from './customButton.module.css';

const CustomButton = ({ children, isSettings, isQuestion, ...otherProps }) => {
  return ( 
    <button className={`${classes.button} ${isSettings ? classes.settings : ''} ${isQuestion ? classes.question : ''}`} { ...otherProps }>{children}</button>
   );
}
 
export default CustomButton;