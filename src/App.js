
import './App.css';
import Createprofile from './Components/Createprofile/Createprofile';
import Mainpage from './Components/Mainpage/Mainpage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import Employers from './Components/employers/Employers';
import Task from './Components/Task/Task';
import Tasklist from './Components/TaskList/Tasklist';
import { createContext } from 'react';

export const EmployersContext = createContext();

function App() {
  return (
    <EmployersContext.Provider value='abid'>
      <Router>
        <Mainpage></Mainpage>
        <Switch>
            <Route  path="/createprofile" component={Createprofile}/>
            <Route  path="/employers" component={Employers}/>
            <Route  path="/createtask" component={Task}/>
            <Route  path="/taskList" component={Tasklist}/>
            <Route exact path="/" component={Homepage}/>

        </Switch>
      </Router>
    </EmployersContext.Provider>
  );
}

export default App;
