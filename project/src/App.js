
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Paper, Switch } from '@material-ui/core';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Layout>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <Quiz />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
}

export default App;