import { Typography, Card, Grid } from "@material-ui/core"
import ProjectSummary from './ProjectSummary';
const ProjectList = ({projects}) => {
    return ( 
        <Grid container direction='column' spacing={2}>
            {projects.map((project) => {
                return (<ProjectSummary project={project}/>);
            })}
        </Grid> 
    );
}
 
export default ProjectList;