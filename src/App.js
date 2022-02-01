import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import StartView from './components/Views/StartView/StartView';
import CloudView from './components/Views/CloudView/CloudView';
import AnswerView from './components/AnswerView/AnswerView';
import FinalView from './components/Views/FinalView/FinalView'
import WordsProvider from './providers/WordsProvider';
import UserProvider from './providers/UserProvider'
function App() {
  return (
    <Router>
      <UserProvider>
      <WordsProvider>
        <Switch>
        <div className="App">
        <Route path="/final">
          <FinalView />
        </Route>
        <Route path="/wordcloud">
          <CloudView />
        </Route>
        <Route exact path="/">
          <StartView/>
        </Route>
        </div>
        </Switch>
      </WordsProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
