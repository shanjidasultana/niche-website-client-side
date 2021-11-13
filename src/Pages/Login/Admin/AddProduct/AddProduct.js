import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const AddProduct = () => {
    const {token}=useAuth()
    const [userData,setUserData]=useState({})
        const handleChange=e=>{
            const textField=e.target.name;
            const inputValue=e.target.value;
            const newData={...userData};
            newData[textField]=inputValue;
            setUserData(newData);
        }
        const handleFormSubmit=e=>{
        
                fetch('https://aqueous-scrubland-99452.herokuapp.com/products', {
                method: 'POST',
                headers: {
                    'authorization':`Bearer ${token}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(res => res.json())
            .then(data => {
                   alert('Added A Product Successfully')
                });
          
            e.preventDefault();
        
        }

    return (
        <form onSubmit={handleFormSubmit}>
                       <Typography variant="h4" sx={{fontFamily:"italic",fontWeight:'bold'}} gutterBottom component="div">
                       Add A Product 
                        </Typography>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label="Prodct Name"
                                variant="standard"
                                color="warning"
                                name="name"
                                onChange={handleChange}
                                />
                            
                            <TextField
                            sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label="Price"
                                type="number"
                                variant="standard"
                                name="price"
                                color="warning"
                                onChange={handleChange}
                                />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label=""
                                type="text"
                                variant="standard"
                                color="warning"
                                name="details"
                                onChange={handleChange}
                                />
                            <TextField
                            sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label="Picture Url"
                                type="url"
                                variant="standard"
                                name="picture"
                                color="warning"
                                onChange={handleChange}
                                /><br/><br/>
                            <button  variant="contained" type="submit" style={{ width: '75%', m: 1,backgroundColor:'#91ff35',padding:'10px 5px',fontSize:'25px',fontWeight:'bold'}}>Add New Product</button>    
                       </form>
    );
};

export default AddProduct;