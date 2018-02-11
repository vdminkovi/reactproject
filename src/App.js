import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Router, Route, IndexRoute, hasgHistory} from "react-router";
import uuid from 'uuid';
import Home from './components/home.js';
import News from './components/news.js';
import NewsItem from './components/NewsItem.js';
import OpenNews from './components/OpenNews.js';
import './App.css';
import './style/stylesheets/reset.css';
import './style/stylesheets/screen.css';


class App extends Component {OpenNews
  constructor() {
    super();

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <div className="Container">
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
        </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
