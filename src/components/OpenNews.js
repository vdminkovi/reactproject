import React, { Component } from 'react';
import axios from 'axios';

class OpenNews extends Component {
  state = {
      loadedNews: null
  }
  componentDidUpdate () {
    if(this.props.id){
        if ( !this.state.loadedNews || (this.state.loadedNews && this.state.loadedNews.id !== this.props.id) ) {
          axios.get( 'https://my-json-server.typicode.com/vdminkovi/demo/mynews/' + this.props.id )
          .then(response => {
            this.setState( { loadedNews: response.data } );
          });
        }
      }
  }

  render() {
    let somenews = <i className="loading">Please select a news ....!</i>
    if ( this.props.id ) {
        somenews = <i className="loading">Loading...!</i>;
    }
    if(this.state.loadedNews){
      somenews = (
        <div className="NewsSum">
          <h2>{this.state.loadedNews.title}</h2>
          <div className="FlexBlock">
            <img src={this.state.loadedNews.img} width="124" height="70" alt="" border="0" className="Image"/>
            <span>{this.state.loadedNews.description}</span>
          </div>
          <a target="_blank" href={this.state.loadedNews.link} className="link-style">Read more >></a>
        </div>
      );
    }
    return somenews;
  }

}

export default OpenNews;
