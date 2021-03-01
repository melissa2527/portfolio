import './App.css';
import {NavBar} from './components/navbar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HomePage} from './components/HomePage/HomePage';
import {Footer} from './components/footer/Footer';
import {ProjectList} from './components/projects/ProjectList';
import {AboutMe} from './components/about/AboutMe';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/projects' component={ProjectList}/>
          <Route path='/about' component={AboutMe}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
