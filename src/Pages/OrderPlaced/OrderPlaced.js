import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import useAuth from '../Hooks/useAuth';
// import  bg2 from '../../images/loginbg-removebg-preview.png'

const OrderPlaced = ({open,handleCloseModal,name}) => {
// const [date, setDate]=useState()

    const {user}=useAuth();
    const initialInfo={ buyerName: user.displayName, email: user.email, phoneNumber: '' }
    const [buyer,setBuyer]=useState(initialInfo)
    const handleOnBlur=e=>{
      const text=e.target.name;
      const textValue=e.target.value;
      const newBuyer={...buyer}
      newBuyer[text]=textValue
      setBuyer(newBuyer)
    }
  
    const handleBooking=e=>{
      const orders={
        ...buyer,
        // date:date.toLocaleDateString(),
        productName:name
      }
      fetch('https://aqueous-scrubland-99452.herokuapp.com/orders', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(orders)
          })
          .then(res => res.json())
              .then(data => {
                  if (data.insertedId) {
                    handleCloseModal();
                  }
              });
      e.preventDefault();
    }
    const style={
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          backgroundColor: 'white',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
  
      }
   
    
      return (
          <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleCloseModal}
          closeAfterTransition
          handleCloseModal={handleCloseModal}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open} >
              <Box sx={style}>
              <Typography variant="h4"  sx={{my:4,fontWeight:'bold',color:'#795548'}}>{name}</Typography>
                  <form onSubmit={handleBooking}>
                      <TextField style={{width:'90%',margin:"5px auto"}}
                      id="outlined-size-normal"
                      label="Your Name"
                      name="buyerName"
                      required
                      variant="outlined"
                      onBlur={handleOnBlur}
                      defaultValue={user.displayName}
                      />
                      <TextField style={{width:'90%',margin:"5px auto"}}
                      id="outlined-size-normal"
                      label="Your Email"
                      name="email"
                      variant="outlined"
                      required
                      defaultValue={user.email}
                      onBlur={handleOnBlur}
                      />
                      <TextField style={{width:'90%',margin:"5px auto"}}
                      id="outlined-size-normal"
                      defaultValue="Phone Number"
                      onBlur={handleOnBlur}
                      variant="outlined"
                      name="phoneNumber"
                      required
                      />
                      {/* <TextField style={{width:'90%',margin:"5px auto"}}
                      id="outlined-size-normal"
                      disabled
                      defaultValue={time}
                      variant="outlined"
                      /> */}
                      {/* <TextField style={{width:'90%',margin:"5px auto"}}
                      id="outlined-size-normal"
                      disabled
                      defaultValue={date.toDateString()}
                      variant="outlined"
                      /><br/><br /> */}
                      <Button type="submit" variant="contained" sx={{bgcolor:"#ccff90",alignText:'center'}}>Place Order</Button>
                      
                  </form>
              </Box>
          </Fade>
        </Modal>
      );
};

export default OrderPlaced;