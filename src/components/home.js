import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import News from './news.js';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Home">
        <h1>Wellcome the the news rss feed!</h1>
        <i>Here you can find the most feed for the most current news and hot topics. </i><br/>
        <small>`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        </small>
        <header>
          <nav>
            <ul>
              <li><Link className="btn-style"  to="/news">News</Link></li>
            </ul>
          </nav>
          <Route path="/news" component={News} />
        </header>
      </div>
    );
  }

}

export default Home;
