import {useState} from 'react';
import {Input, Typography, Grid, Card, Button, TextField } from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: 16,
    },
    input: {
        margin: 8
    },
    heading: {
        textAlign: 'left'
    }
});

const CreateProject = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const classes = useStyles();

    const submit = (e) => {
        e.preventDefault();
        console.log('submit clicked email:',title, content);
    }

    return ( 
        <form>
            <Typography className={classes.heading} variant='h5'>Create New Project</Typography>
            <Grid container direction='column'>
                <TextField className={classes.input}  variant='filled' value={title} label='Title' onChange={(e)=>{setTitle(e.target.value)}}/>
                <TextField className={classes.input}  multiline variant='filled' value={content} label='Content' onChange={(e)=>{setContent(e.target.value)}}/>
                <Button className={classes.input} variant='contained' onClick={(e) => submit(e)}>Create</Button>
            </Grid>
        </form>
     );
}
 
export default CreateProject;