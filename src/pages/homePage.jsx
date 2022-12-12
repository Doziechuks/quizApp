import classes from "./homePage.module.css";
import CustomButton from "../components/customButton";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper}>
      <h1>welcome to our skill test challenge</h1>
      <p>
        This app is designed to test your proficinecy in any skill area of your
        choice. Test your self from a beginners level to Ninja level. Good
        luck!!
      </p>
      <CustomButton onClick={() => navigate('settings')}>start test</CustomButton>
    </div>
  );
};

export default HomePage;
