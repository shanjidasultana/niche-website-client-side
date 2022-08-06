import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, List, ListItem, ListItemButton, ListItemText, TextField, Typography} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import bg from '../../../images/natural1.jpg'
const Footer = () => {
    const footerBg={
        background:`url(${bg})`,
        backgroundColor: 'rgba(45, 58, 74, 0.5)',
        backgroundBlendMode: 'darken, luminosity',
        backgroundSize:'cover',
        paddingTop:'90px',
        backgroundRepeat:"no-repeat",
        backgroundPosition:'center center',
        color:"white",

    }
    return (
      <Box  style={footerBg} >
            <Box sx={{flexGrow:1,}} >
        <Grid container style={{marginRight:"50px"}}>
          <Grid item xs={12} md={4} >
              <Typography varient="h1" sx={{color:'#a52a2a ',fontWeight:'bold',fontSize:'30px'}}>
                    Company
              </Typography>
            <List >
                <ListItem  component="div" disablePadding>
                    <ListItemButton  sx={{display:"flex",flexDirection:"column"}}>
                        <ListItemText varient="body2">Our Story</ListItemText>
                        <ListItemText varient="body2">Our Standards</ListItemText>
                        <ListItemText varient="body2">Our Social Mission</ListItemText>
                        <ListItemText varient="body2">Our Formulas</ListItemText>
                        <ListItemText varient="body2">Our function with benifits</ListItemText>
                        <ListItemText varient="body2">Our career</ListItemText>
                        <ListItemText varient="body2">Our Students Disccount</ListItemText>
                        <ListItemText varient="body2">Our Affilates</ListItemText>
                        <ListItemText varient="body2">Our Blogs</ListItemText>
                        <ListItemText varient="body2">Our Faqs</ListItemText>
                    </ListItemButton>
                    </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography varient="h4" sx={{color:'#a52a2a',fontWeight:'bold',fontSize:'30px'}}>
                   Resources
              </Typography>
            <List >
                <ListItem  component="div" disablePadding>
                    <ListItemButton  sx={{display:"flex",flexDirection:"column"}}>
                        <ListItemText varient="body2">Contact Us</ListItemText>
                        <ListItemText varient="body2">Accessibility</ListItemText>
                        <ListItemText varient="body2">Redeem</ListItemText>
                        <ListItemText varient="body2">Privacy</ListItemText>
                        <ListItemText varient="body2">Terms</ListItemText>
                        <ListItemText varient="body2">supplier code of conduct</ListItemText>
                        <ListItemText varient="body2">Our guarantee</ListItemText>
                        <ListItemText varient="body2">Our Action-words</ListItemText>
                    </ListItemButton>
                    </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}   >
            <Box sx={{display:"flex",flexDirection:"column"}}>
                <Typography varient="h1" sx={{color:'#a52a2a',fontWeight:'bold',fontSize:'30px'}}>
                    Our NewsLetter
                </Typography>
                <Typography varient="subtitle2">
                    Subscribe now to save 15 percents on any of our products
                </Typography>
                <br />
                <TextField id="outlined-basic" label="Your email" variant="outlined"  sx={{mr:1}}  />
                <br /><br />
                <Button variant="contained"  style={{marginRight:"5px",backgroundColor:"#bf7a5d"}}>Subscribe</Button>
                <br />
            </Box>                
                <Box>
                    <FacebookIcon sx={{fontSize:"35px",mr:2}}/>
                    <TwitterIcon sx={{fontSize:"35px",mr:2}}/>
                    <InstagramIcon sx={{fontSize:"35px",mr:2}}/>
                    <GoogleIcon sx={{fontSize:"35px",mr:2}}/>
                </Box>
          </Grid>
        </Grid>
      </Box>
      <br />
      <Typography varient="subtitle2" sx={{color:'black',pb:6}} > &copy;Copyright by Shanjida Sultana,2021</Typography>
      </Box>
    );
};

export default Footer;