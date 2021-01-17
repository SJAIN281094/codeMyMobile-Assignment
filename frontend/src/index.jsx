import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './utils/store';
import { Components } from './utils/material-ui';
import theme from './utils/theme';

const { MuiThemeProvider, CssBaseline } = Components;

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <StateProvider>
      <App />
    </StateProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
