import classes from './app.module.css';
import HomePage from './pages/homePage';
import SettingsPage from './pages/settingsPage';
import QuestionsPage from './pages/questions';
import ScorePage from './pages/scorePage';
import Footer from './components/footer';

import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper}>
      <div className={classes.nav}>
        <p>logo</p>
        <p onClick={() => navigate("/")}>home</p>
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/settings" element={<SettingsPage />} />
        <Route exact path="/questions" element={<QuestionsPage />} />
        <Route exact path="/finalscore" element={<ScorePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
