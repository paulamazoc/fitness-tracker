import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import { AppRouter } from '@/router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ExerciseProvider } from '@/providers/Exercise';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ExerciseProvider>
        <AppRouter />
      </ExerciseProvider>
    </ThemeProvider>
  )
}

export default App
