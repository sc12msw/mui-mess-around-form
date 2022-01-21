import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import HorizontalLinearStepper from './components/form';
import theme from './theme/theme';
function App() {
  return (
    <ThemeProvider  theme={theme}>
    <Box className="App">
       <Box className='App-header'>
     <h1> Lets get down to business </h1>
     
     <h2> To defeat the huns !</h2>
    </Box>

    <Box className='App-body'>
      <HorizontalLinearStepper></HorizontalLinearStepper>
 </Box>

    </Box>
    </ThemeProvider>
  );
}

export default App;
