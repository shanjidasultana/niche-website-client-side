import { Grid,} from '@material-ui/core';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ReadMoreReact from 'read-more-react'
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import OrderPlaced from '../../OrderPlaced/OrderPlaced';
const Product = (props) => {

    const {price,name,details,picture} =props.product;
    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => {
        setOpen(true);
      };
    const handleCloseModal = () => {
        setOpen(false);
      };
    
    return (
       
           <Grid item xs={12} sm={6} md={4} >
            <Card sx={{width:330,mb:8,mx:'auto',boxShadow:0,bgcolor:'#dbf774'}}>
                    <CardMedia
                    component="img"
                    height="460"
                    image={picture}
                    alt="green iguana"
                    />

                <CardContent sx={{boxShadow:5,bgcolor:'black',color:'white'}}>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                     ${price}
                    </Typography>
                   
                </CardContent>
                <CardActions>
                    

                    <ReadMoreReact text={details}
                            min={0}
                            ideal={100}
                            max={200}
                            
                            readMoreText={<ReadMoreIcon sx={{fontSize:"35px",color:"brown"}}>ReadMore</ReadMoreIcon >}/>
                            
                </CardActions>
                        <Button onClick={handleOpenModal} sx={{bgcolor:'#3e2723',mb:9}} variant='contained' >Buy Now</Button>

                
            </Card>
            <OrderPlaced
            handleCloseModal={ handleCloseModal}
            open={open}
            name={name}
            ></OrderPlaced>
           
        </Grid>
           
     
    );
};

export default Product;