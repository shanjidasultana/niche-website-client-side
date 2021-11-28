import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { borderColor, Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';



const ManageProducts = () => {
    const {token}=useAuth();
    
    
    const [products,setProducts]=useState([])
    useEffect(()=>{
      const url=`https://aqueous-scrubland-99452.herokuapp.com/products`
        fetch(url, {
          headers: {
              'authorization': `Bearer ${token}`
          }
      })
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[products,token])

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://aqueous-scrubland-99452.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                      alert('Are sure You want to delete ?')
                    if (data.deletedCount > 0) {
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
    }
    
    return (
      <>
       
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} style={{marginTop:25,mx:'auto',alignItems:'center',justifyContent:'center' }}>
        {
            products.map(product => 
            <Grid item xs={12} sm={12} md={6}>
            
            <Card  sx={{height:'410px',bgcolor:'#fcfcde',color:'#49e35b',border:4,boxShadow:5}} key={product.name}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography sx={{color:'#33f502',fontWeight:'bold'}} component="div" variant="h5">
                  {product.name}
                </Typography><br/>
                <Typography  variant="subtitle2" component="div">
                {product.details}
                </Typography>
                <Button sx={{color:'#ab003c'}} onClick={()=>handleDeleteProduct(product._id)} variant="text" >Delete<DeleteIcon sx={{color:'#482880'}}/>
                </Button>
                <Link style={{textDecoration:'none'}} to={`/dashboard/update/${product._id}`}>
                <Button variant="text" sx={{color:'#ab003c'}}><AssistantDirectionIcon sx={{color:'#e91e63'}}/>Update
                </Button>
                </Link>

              </CardContent>
              
            </Box>
            <CardMedia
            style={{
              width:"150px",
              height:"160px",
            }}
              component="img"
              image={product.picture}
              alt="Live from space album cover"
        
            />
            
            
          </Card>
           
            </Grid>
            
            
        )}

    </Grid>
    </>

    );
};

export default ManageProducts;