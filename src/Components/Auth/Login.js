import {useState} from 'react';
import {Input, Typography, Grid, Card, Button } from "@material-ui/core"
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

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    const submit = () => {
        console.log('submit clicked email:',email);
    }

    return ( 
        <Grid container justify='center'>
            <Card className={classes.root}>
                <form>
                    <Typography className={classes.heading} variant='h5'>Login</Typography>
                    <Grid container direction='column'>
                        <Input className={classes.input} variant='filled' value={email} lable='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                        <Input className={classes.input} variant='filled' value={password} lable='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                        <Button className={classes.input} variant='contained' onClick={submit}>Login</Button>
                    </Grid>
                </form>
            </Card>
        </Grid>
     );
}
 
export default Login;