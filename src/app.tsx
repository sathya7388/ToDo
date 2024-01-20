import React from 'react';
import CardComponent from './Components/Card';
import Header from './Components/Header';
import Home from './Container/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={() => setIsDarkTheme(!isDarkTheme)}/>
      <Home/>
    </ThemeProvider>
  );
}