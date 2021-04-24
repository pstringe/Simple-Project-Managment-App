import {Box, Typography, ButtonGroup, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    
    link: {
        textDecoration: 'none',
    },
});

const Navbar = ({items}) => {
    const classes = useStyles();
    return ( 
        <Box className={classes.root} component='nav'>
            <ButtonGroup variant='text' color='primary' className="links">
                {items.map((item)=>{
                    return (<Link className={classes.link}to={item.path}><Button>{item.name}</Button></Link>);
                })}
            </ButtonGroup>
        </Box>
    );
}
 
export default Navbar;
 