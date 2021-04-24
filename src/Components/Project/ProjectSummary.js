import { Typography, Card, Grid } from "@material-ui/core";

const ProjectSummary = ({project}) => {
    return (
        <Grid item> 
            <Card>
                <Typography variant='h2'>{project.title}</Typography>
                <Typography variant='body2'>{project.author}</Typography>
                <Typography variant='body2'>Date</Typography>
            </Card> 
        </Grid>
    );
}
 
export default ProjectSummary;