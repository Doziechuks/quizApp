import classes from './settingsPage.module.css';
import SelectInput from '../components/selectInput';
import TextInput from '../components/textInput';
import CustomButton from '../components/customButton';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const SettingsPage = () => {

  const { response, error, loading } = useFetch({ url: "/api_category.php" });
  // console.log(response.trivia_categories);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const difficultyOption = [
    {id: 'easy', name: 'Easy'},
    {id: 'medium', name: 'Medium'},
    {id: 'hard', name: 'Hard'}
  ];
  const typeOption = [
    {id: 'multiple', name: 'Multiple Choice'},
    {id: 'boolean', name: 'True/False'}
  ];
  if(loading){
    return <h1>loading...</h1>
  }
  if(error){
    return <h1>something went wrong</h1>
  }
  
  return (
    <div className={classes.wrapper}>
      <h1>setup your skill challenge</h1>
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <SelectInput
            label="Category"
            name="Category"
            options={response.trivia_categories}
            required
          />
          <SelectInput
            label="Difficulty"
            name="Difficulty"
            options={difficultyOption}
            required
          />
          <SelectInput label="Type" name="Type" options={typeOption} required />
          <TextInput label="Amount Of Question" type="number" required />
          <Link to="/questions">
            <CustomButton
              type="submit"
              isSettings
            >
              start challenge
            </CustomButton>
          </Link>
        </form>
      </div>
    </div>
  );
}
 
export default SettingsPage;