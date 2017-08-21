import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter} from 'react-router-dom';

const Mui = () => (
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  );
injectTapEventPlugin();

ReactDOM.render(<BrowserRouter><Mui /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
