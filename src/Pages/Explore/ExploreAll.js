import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ReadMoreReact from 'read-more-react';
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
        <Card sx={{width:330,mb:8,mx:'auto',boxShadow:0,}}>
                <CardMedia
            component="img"
            height="460"
            image={picture}
            alt="green iguana"
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                 ${price}
                </Typography>
               
            </CardContent>
            <CardActions>
                

                <ReadMoreReact text={details}
                        // min={0}
                        // ideal={100}
                        // max={200}
                        
                        readMoreText={<ReadMoreIcon sx={{fontSize:"35px",color:"brown"}}>ReadMore</ReadMoreIcon >}/>
                        
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