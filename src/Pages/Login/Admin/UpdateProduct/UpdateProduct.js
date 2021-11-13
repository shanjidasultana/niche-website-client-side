import { TextField,} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { id } = useParams();
    const [userData,setUserData]=useState({})
        const handleChange=e=>{
            const textField=e.target.name;
            const inputValue=e.target.value;
            const newData={...userData};
            newData[textField]=inputValue;
            setUserData(newData);
        }
        const handleUpdateProduct = e => {
            console.log(userData);
        
            const url = `http://localhost:8000/products/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        alert('Update Successful');
                        setUserData({});
                        e.target.reset();
                    }
                })
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
       
    <Box sx={style}>
            {/* <Typography variant="h4"  sx={{my:4,fontWeight:'bold',color:'#795548'}}>{name}</Typography>     */}
        <form onSubmit={handleUpdateProduct}>
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
             <button  variant="contained" type="submit" sx={{ width: '75%', m: 1,bgcolor:"#607d8b",p:2}}>Add New Product</button>    
        </form>
      </Box> 
    
    );
};

export default UpdateProduct;