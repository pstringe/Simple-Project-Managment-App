import {Container, Grid} from '@material-ui/core';
import Notifications from './Notifications';
import ProjectList from '../Project/ProjectList';
import { useSelector } from 'react-redux';

const Dashboard = (props) => {
    const projects = useSelector(state => state.project.projects);
    console.log('projects', projects);
    return (
        <Grid container>
            <Grid item xs={12} md={8}>
                <ProjectList />
            </Grid>
            <Grid item xs={12} md={4}>
                <Notifications/>
            </Grid>
        </Grid>
    );
}

export default Dashboard;