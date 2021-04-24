import { Typography, Card, Grid } from "@material-ui/core"
import ProjectSummary from './ProjectSummary';
const ProjectList = (props) => {
    return ( 
        <Grid container direction='column' spacing={2}>
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </Grid> 
    );
}
 
export default ProjectList;