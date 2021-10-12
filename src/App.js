import logo from './logo.svg';
import './App.css';
import TrainingPage from './components/TrainingPage/TrainingPage';
import TrainingPage_v2 from './components/TrainingPage/TrainingPage_v2';
import Home from './components/Home/Home';
import { Route, Switch } from 'react-router';


function App() {
  return (
    <div>
      <Home />
      {/* <TrainingPage_v2 /> */}

      {/* <Switch >
        <Route path="/train" component={() => <TrainingPage_v2 />} />
        <Route path="/home" component={() => <Home />} />
      </Switch> */}
    </div>
  );
}
export default App;
