import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Grid, Button} from '@material-ui/core';
import img1 from '../../../images/banner2.jpg'
import img2 from '../../../images/banner3.jpg'
import img3 from '../../../images/banner4.jpg'
import img4 from '../../../images/banner5.jpg'
import img5 from '../../../images/banner6.jpg'
import img6 from '../../../images/banner7.jpg'
import img7 from '../../../images/nanner3.jpg'
import img8 from '../../../images/banner9.jpg'
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const items = [
    {
        name: 'Longer And Stronger Hair',
        description: 'Long and healthy looking hair from root to tip..',
        img:img1
    },
    {
        name: 'Straight and Silky Hair',
        description: 'Use a Banana-Honey Mask twice a week for Straighten Hair Naturally.',
        img:img2
    },
    {
        name: 'Healthy Curly Hair',
        description: 'Make a mask of olive oil, eggs, vinegar and mayonnaise and apply it on your hair.',
        img:img3
    },
    {
        name: 'Healthy Long Hair',
        description: 'Hydrate Your Hair Regularly and Use the Right Brush.',
        img:img4
    },
    {
        name: 'Healthy Thicker Hair',
        description: 'Coconut Oil Can Make Your Hair Grow Longer, Thicker, and Healthier',
        img:img5
    },
    {
        name: 'Straight and Silky Hair',
        description: 'Use a Banana-Honey Mask twice a week for Straighten Hair Naturally.',
        img:img6
    },
    {
        name: 'Healthy Curly Hair',
        description: 'Make a mask of olive oil, eggs, vinegar and mayonnaise and apply it on your hair.',
        img:img7
    },
    {
        name: 'Straight and Silky Hair',
        description: 'Use a Banana-Honey Mask twice a week for Straighten Hair Naturally.',
        img:img8
    },
];
const responsive={
    0: {
            position: "absolute",
            height: "100px",
            top:'80%',
            right:'30%',
            backgroundColor: "transparent",
            marginBottom:"15px"
        },
    512:{
        position: "absolute",
        height: "100px",
        top:'40%',
        right:'30%',
        backgroundColor: "transparent",
        // top: "calc(50% - 70px)",
    }
    
}
  
   
const Banner = (props) => {
    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} {...item} 
                responsive={responsive}
                />
            ))}
        </Carousel>
    );
}

const Item = ({name, description,img}) => {
    // const classes= useStyles();
    return (
        <Box sx={{bgcolor:'#f0f4c3'}}>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                <Grid item xs={12} sm={12} md={6}>
                    <img src={img} 
                    width='600px'
                    height='500px'
                    alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{w:1,my:9}} >
                        <h2 style={{fontWeight:"bold",fontSize:"30px"}}>{name}</h2>
                        <p style={{width:'350px',fontSize:"25px",margin:"5px auto"}}>{description}</p>
                        <NavLink to="/home" style={{textDecoration:"none"}}  >
                            <Button  variant="contained" sx={{color:"#5d4037",mb:"9" ,p:2,fontWeight:"bold",my:4}} >More</Button>
                        </NavLink>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;