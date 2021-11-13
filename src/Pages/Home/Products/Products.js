import { Button, Grid, Typography } from '@material-ui/core';
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
        <>
         <Typography  variant="h3" style={{fontWeight:'bold',marginTop:'50px'}}>Our Products</Typography>

            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} style={{marginTop:25,mx:'auto',alignItems:'center',justifyContent:'center' }}>
        {
            products.map(product => <Product
            key={product.name}
            product={product}
            ></Product>
            
        )}
            </Grid>
            <Link style={{textDecoration:'none',}} to="/explore">
                <Button variant='contained'style={{marginBottom:'19px',backgroundColor:'#91ff35',padding:'10px 5px',fontSize:'25px',fontWeight:'bold'}} >Explore More</Button>

            </Link>
        </>
    );
};

export default Products;