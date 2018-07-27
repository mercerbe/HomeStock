//standard dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//router
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
//semantic
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>,    
  document.getElementById('root')
);
registerServiceWorker();
