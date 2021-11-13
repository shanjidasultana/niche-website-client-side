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
import useAuth from '../../Hooks/useAuth';

const DashBoardHome = () => {

    const {user,token}=useAuth();
    const [orders,setOrders]=useState([])

    useEffect(()=>{
      const url=`https://aqueous-scrubland-99452.herokuapp.com/orders?email=${user.email}`
        fetch(url, {
          headers: {
              'authorization': `Bearer ${token}`
          }
      })
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user.email,token])
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
          </TableRow>
        </TableHead>
        <TableBody>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </>
    );
};

export default DashBoardHome;