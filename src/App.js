import './App.css';
import {NavBar} from './components/navbar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HomePage} from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
