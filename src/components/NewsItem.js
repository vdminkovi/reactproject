import React, { Component } from 'react';

class NewsItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="News" onClick={this.props.clicked} >
        <h3 >
          {this.props.news.title}
        </h3>
        <small><i>{this.props.news.pubDate}</i></small>
      </div>
    );
  }

}

export default NewsItem;
