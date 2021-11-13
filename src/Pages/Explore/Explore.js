import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import ExploreAll from './ExploreAll';

const Explore = () => {
    const [products,setProducts] =useState([]);
    useEffect(()=>{
        fetch('https://aqueous-scrubland-99452.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
       
  
            <>
            <Header></Header>
             <Typography variant="h4" style={{margin:'25px auto',fontWeight:'bold'}}>Our Products</Typography>
    
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} style={{marginTop:25,mx:'auto',alignItems:'center',justifyContent:'center' }}>
            {
                products.map(product =><ExploreAll   key={product.name}
                    product={product}
                    ></ExploreAll>
              
           
                
            )}
                </Grid>
                <Link>
                    <Button variant='contained'sx={{mb:9}} >Go Home Page</Button>
    
                </Link>
                <Footer></Footer>
            </>
    );
  
};

export default Explore;