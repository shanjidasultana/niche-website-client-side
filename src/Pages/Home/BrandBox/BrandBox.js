import { Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const brandDatas=[
    {
        name:'TRESemme',
        logo:'https://i.ibb.co/S75GjK6/brand1.jpg'
    },
    {
        name:'Dove',
        logo:'https://i.ibb.co/zXcWWR3/dove-1.jpg'
    },
    {
        name:'LOreal',
        logo:'https://i.ibb.co/fXbZLmC/Herbal-1.jpg'
    },
    {
        name:'Pantene',
        logo:'https://i.ibb.co/17m30GW/pantene-1.jpg'
    },
    {
        name:'Herbal Essences',
        logo:'https://i.ibb.co/ScKdbFk/Herbal.jpg'
    },
    {
        name:'Head & Shoulders',
        logo:'https://i.ibb.co/JzMNPn1/Head-Shoulders.jpg'
    },
    {
        name:'Garnier',
        logo:'https://i.ibb.co/16yCkzK/garnier.jpg'
    },
    {
        name:'Redken',
        logo:'https://i.ibb.co/SwzKmSS/redken.jpg'
    }
]
const responsive={
    0:{
        items:1,
    },
    512:{
        items:2,
    },
    780:{
        items:4,
    }
}
const items=brandDatas.map(item=>{
    return(
            <Box sx={{w:1/4,my:9,bgcolor:'#f7f3f0 ',pt:4,pb:5}}>
                <img src={item.logo}
                width="250px"
                height="200px"
                alt="" />
            <Typography variant="h6" style={{color:'brown',fontWeight:"bold",marginBottom:'15px'}}>{item.name}</Typography>
        </Box>
       
    )
})
const BrandBox = () => {
    return (
        <div style={{alignItems:'center',backgroundColor:'#f7f3f0 ',}}>
            <Typography variant="h3" style={{fontWeight:'bold',paddingTop:'100px'}} >Our Popular Brands</Typography>
                 <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlayInterval={1000}
                    animationDuration={1500}
                    responsive={responsive}
                    disableDotsControls
                    disableButtonsControls
                    autoPlay
                    items={items}
                 />
        </div>
    );
};

export default BrandBox;