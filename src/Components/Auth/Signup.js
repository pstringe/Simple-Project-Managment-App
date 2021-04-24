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
        textAlign: 'center'
    }
});

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const classes = useStyles();

    const submit = (e) => {
        e.preventDefault();

        console.log('submit clicked email:',email);
    }

    return ( 
        <Grid container justify='center'>
            <Card className={classes.root}>
                <form>
                    <Typography className={classes.heading} variant='h5'>Login</Typography>
                    <Grid container direction='column'>
                        <TextField className={classes.input} variant='filled' value={email} label='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                        <TextField className={classes.input} variant='filled' value={password} label='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                        <TextField className={classes.input} variant='filled' value={firstName} label='First Name' onChange={(e)=>{setFirstName(e.target.value)}}/>
                        <TextField className={classes.input} variant='filled' value={lastName} label='Last Name' onChange={(e)=>{setLastName(e.target.value)}}/>
                        <Button className={classes.input} variant='contained' onClick={(e) => submit(e)}>Sign Up</Button>
                    </Grid>
                </form>
            </Card>
        </Grid>
     );
}
 
export default Signup;