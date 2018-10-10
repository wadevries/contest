import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box'
import { BlueText, DynamicComponent, RedText } from './Components'
import {Provider} from './context'

const redContext = { TextComponent: RedText, /* ... other configurable components */ }
const blueContext = { TextComponent: BlueText }

class App extends Component {
  render() {
    return (
      <Provider value={blueContext}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Box>
              {/* This dynamic component is defined somewhere down the tree, but controlled by the root level context.*/}
              <DynamicComponent>
                Hello World
              </DynamicComponent>
            </Box>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
