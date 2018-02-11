import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import NewsItem from './NewsItem';
import OpenNews from './OpenNews';
import Home from './home';

class News extends Component {
  state = {
    news: [],
    selectedNewsId: null
  }
  componentDidMount(){
    axios.get('https://my-json-server.typicode.com/vdminkovi/demo/mynews').then(response => {
      const news = response.data.slice(0, 4);
      const updatedNews = news.map(news => {
          return {
              ...news,
          }
      });
      this.setState({news: updatedNews});
      console.log(response);
    });
  }

newsSelectedHandler = (id) => {
  this.setState({selectedNewsId: id})
}

  render() {
    let newsItem;
    if(this.state.news){
      newsItem = this.state.news.map(news => {
            return (
              <NewsItem  key={news.id} news={news}
                        clicked = {() => this.newsSelectedHandler(news.id)}
              />
            );
      });

    }
    return (
      <div className="NewsContainer">
      <header>
        <nav>
          <ul>
            <li><Link className="btn-style" to="/">Home</Link></li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
      </header>
      <div className="NewsTabs">
        {newsItem}
      </div>
        <OpenNews key={this.state.news.id}  id={this.state.selectedNewsId} />
      </div>

    );
  }
}

export default News;
