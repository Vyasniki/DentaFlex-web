import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@mui/material';

const theme = createMuiTheme({
  palette: {
      primary: {
        main: "#798C77" // This is an orange looking color
               },
      secondary: {
        main: "#ffcc80" //Another orange-ish color
                }
           },
      background: {
        paper: '#798C77'
      }
//fontFamily: font // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
