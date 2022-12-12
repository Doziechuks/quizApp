import classes from './settingsPage.module.css';
import SelectInput from '../components/selectInput';
import TextInput from '../components/textInput';
import CustomButton from '../components/customButton';

const SettingsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className={classes.wrapper}>
      <h1>setup your skill challenge</h1>
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <SelectInput label="Category" name="Category" required />
          <SelectInput label="Difficulty" name="Difficulty" required />
          <SelectInput label="Type" name="Type" required />
          <TextInput label="Amount Of Question" type="number" required />
          <CustomButton type="submit" isSettings>
            start challenge
          </CustomButton>
        </form>
      </div>
    </div>
  );
}
 
export default SettingsPage;