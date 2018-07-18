// @flow

import React, { Component } from 'react';

type Props = {}

type State = {};

class App extends Component<Props, State> {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <div className="head">
          Hello world
        </div>
        <div className="body">
          This is a boilerplate built by React
        </div>
      </div>
    );
  }
}


export default App;
