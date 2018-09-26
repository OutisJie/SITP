import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// BrowserRouter基于h5,HashRouter是浏览器解析路由
import './App.css';
import Login from './page/login';
import Home from './page/home';
import Header from './component/header';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
