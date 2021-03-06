import {Container} from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider, useTheme} from '@material-ui/core/styles';
import Header from './Components/Layout/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/Project/ProjectDetails';
import ProjectSummary from './Components/Project/ProjectSummary';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import CreateProject from './Components/Project/CreateProject';
const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
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
  {name: 'root', path: '/', component: null, auth: true, show:false},
  {name: 'dashboard', path: '/dashboard', component: <Dashboard/>, auth: true, show:true},
  {name: 'new project', path: '/newproject', component: <CreateProject/>, auth: true, show:true},
  {name: 'project details', path: '/project/:id', component: ProjectDetails, auth: true, show:false},
  {name: 'Logout', path: '/logout', component: null, auth: true, show:true},
  {name: 'Profile', path: '/profile', component: null, auth: true, show:true},
  {name: 'Login', path: '/login', component: <Login/>, auth: false, show:true},
  {name: 'Signup', path: '/signup', component: <Signup/>, auth: false, show:true},
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