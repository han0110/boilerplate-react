// @flow

import React, { Component } from 'react';
import styles from './App.scss';

type Props = {}

type State = {};

class App extends Component<Props, State> {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.head}>Hello world</div>
        <div className={styles.body}>This is a boilerplate built by React</div>
      </div>
    );
  }
}


export default App;
