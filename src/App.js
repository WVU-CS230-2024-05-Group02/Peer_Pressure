import React from 'react';
import './App.css';
import GenericPage from './GenericPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentCourse from './StudentCourse'; // import the StudentCourse component

function App() {
  return (
    <Router>
      <div className="App">
        <GenericPage>
          <Switch>
            <Route exact path="/" component={() => <div>Home Page</div>} />
            <Route path="/evaluations" component={() => <div>Evaluations Page</div>} />
            <Route path="/grades" component={() => <div>Grades Page</div>} />
            <Route path="/course" component={StudentCourse} /> {/* example course component */}
          </Switch>
        </GenericPage>
      </div>
    </Router>
  );
}

export default App;
