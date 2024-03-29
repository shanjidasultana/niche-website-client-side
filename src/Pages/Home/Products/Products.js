import { Button, Grid, Typography,Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
const [products,setProducts] =useState([]);
    useEffect(()=>{
        fetch('https://aqueous-scrubland-99452.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data.slice(0, 6)))
    },[])
    return (
        <Box sx={{bgcolor:'#f7f3f0',pb:8}}>
         <Typography  variant="h3" style={{fontWeight:'bold',marginTop:'50px',padding:'40px'}}>Our Products</Typography>
         <Typography  variant="body2" style={{marginTop:'5px',color:'gray'}}>Treat yourself to one of our products and  enjoy the long lasting hair</Typography>

            <Grid container spacing={{ xs: 1, sm: 3, md: 4 }} style={{marginTop:25,mx:'auto',alignItems:'center',justifyContent:'center' }}>
        {
            products.map(product => <Product
            key={product.name}
            product={product}
            ></Product>
            
        )}
            </Grid>
            <Link to="/explore" style={{textDecoration:'none',}} >
                <Button variant='contained'style={{marginBottom:'19px',padding:'10px 5px',fontSize:'20px',fontWeight:'bold',}} >Explore More</Button>

            </Link>
        </Box>
    );
};

export default Products;