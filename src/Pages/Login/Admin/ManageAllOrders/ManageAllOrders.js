import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { InputLabel, MenuItem, Select } from '@mui/material';

const ManageAllOrders = () => {
  const [status, setStatus] =useState('');
  

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

    const {user,token}=useAuth();
    const [orders,setOrders]=useState([])
    console.log(orders);
    
    useEffect(()=>{
      const url=`https://aqueous-scrubland-99452.herokuapp.com/orders`
        fetch(url, {
          headers: {
              'authorization': `Bearer ${token}`
          }
      })
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user.email,token])
    const handleStatus=id=>{
      console.log(id);
console.log(status)

        fetch(`https://aqueous-scrubland-99452.herokuapp.com/orders/${id}?status=${status}`,{
        method:'PUT',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify()

      })

     
      .then(res => res.json())
      .then(data => {
        const allOrders=[...orders];
      const match=orders.find(order=>order._id === id)
      allOrders[match?.status]=data;
      setOrders(allOrders)
      alert('Change Status Successfully')
        
      
      
    });
    }

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://aqueous-scrubland-99452.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(user => user._id !== id);
                        setOrders(remainingUsers);
                    }
                });
        }
    }
    return (
       <>
           <h1>{orders.length}</h1>
            <TableContainer  component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {
            console.log(orders)
          }
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.buyerName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right">
              <button onClick={() => handleDeleteUser(row._id)}><DeleteSweepIcon  sx={{color:'#ab003c',fontSize:'28px'}}/></button>

              </TableCell>
              <TableCell align="right">
                
              <InputLabel id="demo-simple-select-label" sx={{border:0}}>{row.status}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onClick={() => handleStatus(row._id)} 
                  onChange={handleChange}
                >
                    <MenuItem value="10">Shipped</MenuItem>
                    <MenuItem value="12">pending</MenuItem>
                  </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </>
    );
};

export default ManageAllOrders;