import { Grid, Typography, Card, CardActions, CardContent } from "@material-ui/core"

const ProjectDetails = (props) => {
    const id = props.match.params.id;
 
    return ( 
        <Grid>
            <Card>
                <CardContent>
                    <Typography variant='h2'>Project Title: {id}</Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi sit amet ante maximus finibus. In mattis malesuada mi eu mollis. Nullam ut risus diam. Sed nec lorem neque. Duis volutpat malesuada mollis. Pellentesque pulvinar, leo at eleifend tempor, turpis mi bibendum neque, eget placerat elit risus nec sapien. Vivamus eget interdum mi. Vestibulum at massa in nunc tempus venenatis. Etiam sed massa sit amet nulla commodo malesuada a a sapien.</Typography>
                </CardContent>
                <CardActions>
                    <Typography variant='body2'>Owner</Typography>
                    <Typography variant='body2'>Date</Typography>
                </CardActions>
            </Card>
        </Grid> 
    );
}
 
export default ProjectDetails;