import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import shampoLogo from '../../../images/shampo.png'
import { Link } from 'react-router-dom';
import { makeStyles, Menu,useTheme,useMediaQuery } from '@material-ui/core';
import { MenuItem } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import useAuth from '../../Hooks/useAuth';
import { Avatar,} from '@mui/material';


const useStyles1=makeStyles({
    header:{
        backgroundColor: '#ccff90',
        color:"brown",
        fontWeight:"bold",
        fontSize:"50px"
    },
   linkStyle:{
    textDecoration:"none",
    color:"brown",
   }
})

const useStyles2=makeStyles(theme=>({
    sectionDesktop:{
        display:"flex",
        [theme.breakpoints.down('md')]:{
            display:"none",
        },

    }
}))
const Header =() => {
    const {user,logoutUser,}=useAuth();
    const theme=useTheme()
const isMatched=useMediaQuery(theme.breakpoints.down('md'))
    const[mobileMenuAnchor,setMobileMenuAnchor] =React.useState(null)
   const isMobileMenuOpen=Boolean(mobileMenuAnchor)
   const openMobileMenu=event=>{
       setMobileMenuAnchor(event.currentTarget)
   }
   const closeMobileMenu=()=>{
       setMobileMenuAnchor(null)
   }
    const mobileMenu=(
        <Menu  anchorEl={mobileMenuAnchor} id="mobile-Menu" keepMounted open={isMobileMenuOpen}>
            <MenuItem component={Link} style={{marginRight:"200px",Color:" goldenrod",fontWeight:"bold",fontSize:'22px'}} onClick={closeMobileMenu}  to="/">home</MenuItem><br/>
            <MenuItem component={Link} style={{marginRight:"200px",Color:" goldenrod",fontWeight:"bold",fontSize:'22px'}} onClick={closeMobileMenu} to="/explore">Explore</MenuItem><br/>
            <MenuItem component={Link} style={{marginRight:"200px",Color:" goldenrod",fontWeight:"bold",fontSize:'22px'}} onClick={closeMobileMenu} to="/dashboard">Dashboard</MenuItem><br/>
            {
             user?.email? <MenuItem  sx={{fontSize:'27px',fontWeight:"bold",}} onClick={closeMobileMenu}> <Button  sx={{fontSize:'22px',fontWeight:"bold",}} onClick={logoutUser}>LOGOUT</Button></MenuItem> : <MenuItem  sx={{fontSize:'22px',fontWeight:"bold",}} component={Link}  onClick={closeMobileMenu} to="/login">LOGIN</MenuItem>
            }
            {
                user?.photoURL && <MenuItem  onClick={closeMobileMenu}> <Avatar  sx={{p:3,mx:"auto",my:5}} aria-label="recipe">
                <img src={user.photoURL} alt="" />
            </Avatar>
            </MenuItem>
            }
            {
              user?.email && <MenuItem   sx={{fontSize:'22px',fontWeight:"bold",}} onClick={closeMobileMenu}><Typography  sx={{mx:'auto'}} variant="subtitle2" >{user?.displayName}</Typography></MenuItem>   
            }
        </Menu>
    )
    const classes1 = useStyles1();
    const classes2 = useStyles2();
    return (
        <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" >
          <Toolbar className={classes1.header}>
          
            <img src={shampoLogo} alt=""  width="80"/>
            <Typography variant="h3" component="div"sx={{ml:3,fontFamily:"italic",fontWeight:'bold'}}>
              <cite style={{ marginRight:'35px'}}>Shivo</cite>
            </Typography>
            {isMatched? <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              
             
            >
              <ListIcon sx={{ml:20,fontSize:30}} onClick={openMobileMenu} />
            </IconButton>
            : 
            <Box className={classes2.sectionDesktop}>
                <Link to="/" className={classes1.linkStyle} >
                    <Button color="inherit"  sx={{ml:8,fontSize:"18px"}} >Home</Button>
                </Link>
                <Link to="/explore" className={classes1.linkStyle}>
                    <Button color="inherit" sx={{ml:8,fontSize:"18px"}} >Explore</Button>
                </Link>
                <Link to="/dashboard" className={classes1.linkStyle}>
                    <Button color="inherit"  sx={{ml:8,fontSize:"18px"}}>Dashboard</Button>
                </Link>
               {
                  user?.email? <Button color="inherit" onClick={logoutUser}  sx={{mr:8,fontSize:"18px",}}>LOGOUT</Button>:<Link to="/login" className={classes1.linkStyle}>
                  <Button color="inherit"  sx={{ml:6,fontSize:"18px"}}>LOGIN</Button>
              </Link>
                 
               }
               {
                   user?.email &&  <Box>
                       <Avatar  sx={{ml:5,p:1}} aria-label="recipe">
                   <img src={user.photoURL} alt="" />
                    </Avatar>
                    <Typography sx={{ml:5,mt:1}} variant="subtitle2" >{user?.displayName}</Typography>
                   </Box>
               }
            </Box>
            }
           
          </Toolbar>
        </AppBar>
        {mobileMenu}
      </Box>
    );
};

export default Header;