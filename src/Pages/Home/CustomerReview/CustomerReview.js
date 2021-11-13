import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Avatar, Card, CardContent, Grid, Rating } from '@mui/material';

const CustomerReview = (props) => {
    const [ratings,setRatings] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/reviews')
        .then(res=>res.json())
        .then(data=>setRatings(data))
    },[])

    return (
       
            <>
   
    
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} style={{marginTop:25,mx:'auto',alignItems:'center',justifyContent:'center' }}>
            {
                ratings.map(item =><Grid 
                    key={item._id}
                items xs={12} sm={6} md={4}>
                        <Card sx={{width:330,mb:8,mx:'auto',boxShadow:0,}}>
                            <CardContent>
                            <Avatar  sx={{p:3,mx:"auto",my:5}} aria-label="recipe">
                                <img src={item.photoURL} alt="" />
                            </Avatar>
                                <Typography gutterBottom variant="h5" component="div">
                                {item.reviewers}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                {item.description}
                                </Typography>
                                <Rating name="read-only" value={item.rating} readOnly />
                            
                            </CardContent>
                        </Card>
                    </Grid>
              
            )}
              </Grid>
            </>
        );
    };
 


export default CustomerReview;