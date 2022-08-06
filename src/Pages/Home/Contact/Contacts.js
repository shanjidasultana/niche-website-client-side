import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/banner1.jpg'


const Contact = () => {
    return (
        <div style={{paddingTop:'100px',backgroundColor:"#f7f3f0"}} >
           <Grid container spacing={{ xs: 2, sm: 3, md: 4}}  >
               <Grid item xs={12} sm={12} md={6} >
               <Box
               sx={{mb:9}}
                component="form"
                noValidate
                autoComplete="off"
            >
                     <Typography variant="h4" gutterBottom style={{color:'#764d2c',textAlign:'center',fontWeight:'bold'}}>
                      Comment Box
                    </Typography>
                   
                <form >
                    <TextField
                        disabled
                        sx={{ width: '80%', my:1 ,bgcolor:"white"}}
                        id="outlined-size-small"
                        placeholder="your email"
                        size="small"
                        type="email"
                    />
                    <TextField
                        sx={{ width: '80%', m: 3 ,bgcolor:"white" }}
                        id="outlined-size-small"
                        size="small"
                        placeholder="your subject"
                        type="text"
                    />  
                  <TextField
                        aria-label="minimum height"
                        minRows={5}
                        sx={{width:'80%', m: 3 ,bgcolor:"white" }}
                        id="outlined-size-large"
                        size="large"
                        placeholder="your message "
                       type=""
                    />
                    <br />
                    <Button type="submit" variant="contained" sx={{my:5,bgcolor:'#a52a2a',py:2,px:8}}>Submit</Button>

                </form>            
            </Box>

               </Grid>
               <Grid item xs={12} sm={12} md={6}>
                   <img src={bg} alt="" width='96%' />
               </Grid>
           </Grid>
        </div>
        
    );
};

export default Contact;