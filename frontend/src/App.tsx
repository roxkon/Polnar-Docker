import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './containers/Main';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
        <Switch>
        <Route path="/" component={Main} />
        </Switch>
        </header>
      </div>
    );
  }
}

export default App;
