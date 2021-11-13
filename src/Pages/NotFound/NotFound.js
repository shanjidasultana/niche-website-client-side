import { Grid, Typography ,Button} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notFound.gif'
const NotFound = () => {
    return (
        <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                        <img src={notfound} alt="" srcset="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{my:12}}>
                    <Typography variant="h2" sx={{color:'red',fonWeight:'bold'}}>
                        404
                    </Typography>
                    <Typography variant="h5" sx={{color:'green'}}>
                        PAGE NOT FOUND
                    </Typography>
                    <Link to="/home" style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{mt:'20px',bgcolor:"#ccff90",color:'black',px:2,fontSize:"26px"}}>Go Back</Button>

                    </Link>                
                </Grid>
        </Grid>
    );
};

export default NotFound;