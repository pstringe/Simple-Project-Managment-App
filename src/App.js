import {Container} from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider, useTheme} from '@material-ui/core/styles';
import Header from './Components/Layout/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
      background: {
        default: '#212121',
        paper: '#424242',
      },
    }
  }
);

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between' 
  }
}));

const routes = [
  {name: 'root', path: '/', component: null, auth: true},
  {name: 'dashboard', path: '/dashboard', component: null, auth: true},
  {name: 'new project', path: '/newproject', component: null, auth: true},
  {name: 'Logout', path: '/logout', component: null, auth: true},
  {name: 'Profile', path: '/profile', component: null, auth: true},
  {name: 'Login', path: '/login', component: null, auth: false},
  {name: 'Signup', path: '/signup', component: null, auth: false},
];

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />

      <Container  className={`App ${classes.root}`} maxWidth='xl' >
        <Router>
          <Header className={classes.header} title='Simple Projects' items={routes}/>
          <Container>
            <Switch>
              {routes.map((route, idx)=>{
                return (!idx ? <Route exact path={route.path}>{route.component}</Route> : 
                <Route path={route.path}>{route.component}</Route>);
              })}          
            </Switch>
          </Container>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;