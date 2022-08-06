import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import OrderPlaced from '../OrderPlaced/OrderPlaced';
const ExploreAll = (props) => {
    const {price,name,details,picture} =props.product;
    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => {
        setOpen(true);
      };
    const handleCloseModal = () => {
        setOpen(false);
      };
    
    return (
        
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{width:330,mb:8,mx:'auto',boxShadow:0,bgcolor:'#b3fc9d'}}>
                <CardMedia
                // style={{filter:' drop-shadow(0 0 0.75rem green)'}}
            component="img"
            // height="460"
            image={picture}
            alt="green iguana"
            
            />

            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                {name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                 ${price}
                </Typography>
               
            </CardContent>
            <CardActions>
            <Typography  variant="subtitle2" component="div">
                {details}
            </Typography>
                </CardActions>
                <Button  onClick={handleOpenModal}  variant='contained'style={{marginBottom:'19px',backgroundColor:'#91ff35',padding:'5px 5px',fontSize:'18px',fontWeight:'bold'}} >Buy Now</Button>

            <OrderPlaced
            handleCloseModal={ handleCloseModal}
            open={open}
            name={name}></OrderPlaced>
        </Card>
       
    </Grid>
    );
};

export default ExploreAll;