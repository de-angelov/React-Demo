import React, { Component } from 'react';
import Plyr from 'react-plyr';
import './css/plyr.css';
import './css/video.css'; 

export default class video extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: this.props.url,
  }
  }

  render() {
    return (
      <div>
        <Plyr
          type ="youtube"
          videoId = {this.state.url}
          />
      </div>
    )
  }
}



