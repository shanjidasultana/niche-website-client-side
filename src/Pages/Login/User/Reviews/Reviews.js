import { TextField,Button, Rating } from '@mui/material';
import React, { useState,useRef } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Reviews = () => {
    const [value, setValue] =useState('');
    const {user}=useAuth();
    const valueRef=useRef()
    valueRef.current=value;
    const [reviews,setReviews]=useState({})


    const handleOnBlur=e=>{
    const textValue=e.target.value;
    const initialInfo={ reviewers: user.displayName, email: user.email ,photoURL:user.photoURL,rating:value,description:textValue}
    setReviews(initialInfo);
    }
    console.log(reviews);
    const handleRating=e=>{
       
        fetch('http://localhost:8000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviews)
            })
            .then(res => res.json())
                .then(data => {
                  if(data.insertedId){
                    alert('Review Added Successfully')
                    setReviews({})
                  }
                   
                });
        e.preventDefault();
      }
  
    return (
        <form onSubmit={handleRating} sx={{mx:'auto',}}>
         <Rating
         sx={{
            '& > legend': { mt:2},
            fontSize:50,

          }}
        name="simple-controlled"
        value={value}

        onChange={(event, newValue) => {
          setValue(newValue);

        }}
        /><br/><br/>
        <TextField 
        
       sx={{width:'500px',mx:'auto',my:4}}
        disabled
        id="outlined-size-normal"
        label="Your Name"
        name="reviewers"
        required
        variant="outlined"
        defaultValue={user.displayName}
        />
        <br />
        <TextField 
        disabled
        sx={{width:'500px',mx:'auto',my:4}}
        id="outlined-size-normal"
        label="Your Email"
        name="email"
        variant="outlined"
        required
        defaultValue={user.email}

        />
        {/* <TextField 
        disabled
        sx={{width:'500px',mx:'auto',my:4}}
        id="outlined-size-normal"
        label="Your Photo"
        name="photoURL"
        variant="outlined"
        required
        defaultValue={user.photoURL}

        /> */}
        <br />
        <TextField
        sx={{width:'500px',mx:'auto',my:4}}
        id="outlined-size-normal"
        label="Description"
        onBlur={handleOnBlur}
        variant="outlined"
        name="description"
        type="text"
        required
        />
        <br />
        <Button type="submit" variant="contained" sx={{bgcolor:"#ccff90",alignText:'center'}}>Review send</Button>
        
    </form>
    );

}

export default Reviews;










