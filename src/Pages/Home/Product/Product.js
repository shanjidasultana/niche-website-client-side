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
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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
            <Card sx={{width:330,mb:8,mx:'auto',boxShadow:0,bgcolor:'#f7f3f0 '}}>
                    <CardMedia
                    component="img"
                    height="370"
                    image={picture}
                    alt="green iguana"
                    />

                <CardContent sx={{fontWeight:'bold'}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
                    {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" style={{color:'brown',fontWeight:'bold'}}component="div">
                     ${price}
                    </Typography>
                   
                </CardContent>
                <CardActions>
                    
                

                   
                            
                </CardActions>
                        <Button onClick={handleOpenModal} sx={{bgcolor:'#3e2723',}} variant='contained' ><AddShoppingCartIcon sx={{ml:2}}/>   ADD TO CART</Button>

                        <div style={{display:'flex',}}>
                <h1 style={{marginLeft:'72px',fontSize:"20px",fontWeight:'bold',color:'brown'}}>LEARN MORE</h1>    
                
                <ReadMoreReact text={details}
                            min={0}
                            ideal={0}
                            max={0}
                            
                            readMoreText={<ReadMoreIcon sx={{fontSize:"35px",color:"brown",mt:1,ml:2}}>ReadMore</ReadMoreIcon >}/>
                </div>
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