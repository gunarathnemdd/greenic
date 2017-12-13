import React, { Component } from 'react';
import NavigationBar from './../navigation_bar/NavigationBar';
import { browserHistory } from 'react-router';

class Home extends Component {
  render() {
    return (
        <div className="App">
          <NavigationBar />
          {this.props.children}
        </div>
    )
  }
}

export default Home;