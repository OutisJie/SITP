import React, { Component } from 'react';
import { Router, BrowserRouter, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </header>
    <p className="App-intro">
      this is the {title} page.
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/settings">Settings</Link>
    </p>
  </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/setting" component={Settings}/>
      </Router>
    );
  }
}

export default App;
