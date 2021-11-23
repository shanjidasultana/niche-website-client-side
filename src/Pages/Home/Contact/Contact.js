import { Grid, Typography ,Box} from '@mui/material';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import React from 'react';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import bg from '../../../images/loginbg-removebg-preview.png';


const contactBg={
    background:`url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.2)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundSize:'cover',
    backgroundRepeat:"no-repeat",
    backgroundPosition:'center center',
    color:"Brown",
}
const Contact = () => {
    return (
       <>
        <Typography variant="h3" style={{margin:'30px auto',fontWeight:'bold'}}>Our Services</Typography>
 
        <Box style={contactBg}>
            <Grid container sx={{textAlign:'center',p:5}}  spacing={3}>
                    <Grid item xs={12}  md={4}>
                    <Box height='180px' sx={{backgroundColor:"#f3ffcf",pt:2,my:'auto'}}>
                        <DeliveryDiningIcon  style={{fontSize:'70px',color:"brown"}}/>
                            <Typography variant="h4" >
                                Safe Home delivery...
                            </Typography>
                            <Typography variant="p">
                               we always think about our customer..their require
                            </Typography>
                        </Box>
                        
                        
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Box  height='180px'sx={{backgroundColor:"#dbffe8",pt:3,my:'auto'}}>
                            <HighQualityIcon style={{fontSize:'70px',color:"brown"}}/>
                            <Typography variant="h4">
                                Products quality ...
                            </Typography>
                            <Typography variant="p">
                                We supply 100% qualityful product
                            </Typography>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box  height='180px'sx={{bgcolor:"#f3ffcf",pt:3,my:'auto',}}>
                            <PhoneInTalkIcon style={{fontSize:'70px',color:"brown"}}/>
                            <Typography variant="h4" >
                            Contact Us Now ...
                            </Typography>
                            <Typography variant="p">
                                +0124536789920
                            </Typography>
                        </Box>
                    
                    </Grid>
                
            </Grid>
        </Box>
        </>
    );
};

export default Contact;