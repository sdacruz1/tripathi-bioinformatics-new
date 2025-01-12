import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#148087",
    },
    secondary: {
      main: "#feeb0f",
    },
  },
  typography: {
    h1: {
      fontSize: "42px",
      fontWeight: 800,
      color: "#ffffff",
    },
    h2: {
      fontSize: "32px",
      fontWeight: 600,
      color: "#ffffff",
    },
    h3: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#ffffff",
    },
    h4: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#ffffff",
    },
    p: {
      fontSize: "14px",
      color: "#ffffff",
    }
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Default color
          '&.Mui-checked': {
            color: '#ffffff', // Checked color
          },
        },
      },
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your app in BrowserRouter for routing */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
