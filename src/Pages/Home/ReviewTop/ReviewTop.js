import { Grid, Typography,Button } from '@mui/material';
import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';


const ReviewTop = () => {
    const defaultLabelStyle = {
        fontSize: '20px',
        fontFamily: 'sans-serif',
        color:"white"
      };
      
    return (
        <div style={{background:'#e8e7ea'}}>
             <Typography variant="h3" style={{fontWeight:'bold'}}>Customers Reviews</Typography>           

            <Grid container style={{padding:'80px',}}>
                       <Grid items xs={12} sm={12} md={6} style={{marginTop:"58px"}}>
            <Progress
          
            percent={85}
            style={{width:"400px",margin:'10px auto'}}
                theme={{
                    active: {
                        symbol: "⭐⭐⭐⭐⭐",
                        color: '#d3a863'
                    },
                }}
                />
            <Progress
            percent={80}
            style={{width:"400px",margin:'10px auto'}}
                theme={{
                    active: {
                        symbol: '⭐⭐⭐⭐',
                        color: '#d3a863'
                    },
                }}
                />
            <Progress
            percent={50}
            style={{width:"400px",margin:'10px auto'}}
                theme={{
                    active: {
                       
                        symbol: '⭐⭐⭐',
                        color: '#d3a863'
                    },
                }}
                />
            <Progress
            percent={30}
            style={{width:"400px",margin:'10px auto'}}
                theme={{

                    active: {
                       
                        symbol: '⭐⭐',
                        color: '#d3a863'
                    },
                }}
                />
            <Progress
            percent={20}
            style={{width:"400px",margin:'4px auto'}}
                theme={{
                    active: {
                        symbol: '⭐',
                        color: '#d3a863'
                    },
                }}
                />
      
            </Grid>
            <Grid  style={{width:"280px",marginLeft:'100px',marginTop:'5px'}}>
            <PieChart
                lengthAngle={-360} animate 
                
                label={({ x, y, dx, dy, dataEntry }) => (
                    <text
                      x={x}
                      y={y}
                      dx={dx}
                      dy={dy}
                      dominant-baseline="central"
                      text-anchor="middle"
                      style={{
                        fontSize: '5px',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {Math.round(dataEntry.percentage) + '%'}
                    </text>
                  )}
                  labelStyle={defaultLabelStyle}  
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'One', value: 5, color: '#3c566b' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 12, color: '#6A2135' },
                    { title: 'Four', value: 4, color: '#969581' },
                    { title: 'Five', value: 10, color: '#d3a863' },
                ]}
                />
            </Grid>
            
        </Grid>
        <Link style={{textDecoration:'none'}} to="/dashboard/review">
            <Button variant="contained"  sx={{bgcolor:'#3e2723',mt:9,px:5,py:2}}>Write A Review</Button>
        </Link>
       
        </div>
    );
};

export default ReviewTop;