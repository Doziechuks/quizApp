import classes from './settingsPage.module.css';
import Loader from '../components/loader';
import SelectInput from '../components/selectInput';
import TextInput from '../components/textInput';
import CustomButton from '../components/customButton';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAmountOfQuestion } from '../redux/selector';
import { useState } from 'react';

const SettingsPage = ({ amountOfQuestion }) => {
  const [result, setResult] = useState('');

  const { response, error, loading } = useFetch({ url: "/api_category.php" });

  const difficultyOption = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];
  const typeOption = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];
  
   const handleSubmit = (e) => {
     e.preventDefault();
     if (amountOfQuestion > 50) {
       setResult("Amount of question should be less than 50");
       return;
     }
   };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1>something went wrong</h1>;
  }

  return (
    <div className={classes.wrapper}>
      <h1>setup your skill challenge</h1>
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <h1>{result}</h1>
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
            <CustomButton type="submit" isSettings>
              start challenge
            </CustomButton>
          </Link>
        </form>
      </div>
    </div>
  );
};
 
const mapStateToProps = createStructuredSelector({
  amountOfQuestion: selectAmountOfQuestion
});
export default connect(mapStateToProps)(SettingsPage);