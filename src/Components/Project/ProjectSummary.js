import { Typography, Card, Grid } from "@material-ui/core";

const ProjectSummary = () => {
    return (
        <Grid item> 
            <Card>
                <Typography variant='h2'>Project Title</Typography>
                <Typography variant='body2'>Author</Typography>
                <Typography variant='body2'>Date</Typography>
            </Card> 
        </Grid>
    );
}
 
export default ProjectSummary;