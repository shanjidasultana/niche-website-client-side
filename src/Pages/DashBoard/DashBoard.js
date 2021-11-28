import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link ,useRouteMatch,Switch} from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import PrivateRoute from '../Login/Login/PrivateRoute/PrivateRoute';
import DashBoardHome from './DashBoardHome/DashBoardHome';
import AdminRoute from '../Login/Admin/AdminRoute/AdminRoute';
import MakeAdmin from '../Login/Admin/MakeAdmin/MakeAdmin';
import Pay from '../Login/User/Pay/Pay';
import MyOrders from '../Login/User/MyOrders/MyOrders';
import Reviews from '../Login/User/Reviews/Reviews';
import ManageAllOrders from '../Login/Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../Login/Admin/ManageProduct/ManageProducts';
import AddProduct from '../Login/Admin/AddProduct/AddProduct';
import UpdateProduct from '../Login/Admin/UpdateProduct/UpdateProduct';
import { makeStyles } from '@material-ui/core';
import LockIcon from '@mui/icons-material/Lock';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EditIcon from '@mui/icons-material/Edit';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import IsoIcon from '@mui/icons-material/Iso';
const drawerWidth = 220;
const useStyles1=makeStyles({
  header:{
      backgroundColor: '#a5f794',
      color:"brown",
      fontWeight:"bold",
      fontSize:"50px"
  },
 linkStyle:{
  textDecoration:"none",
  color:'black',
  fontSize:'58px',
  fontWeight:'bold'
 }
})


function DashBoard(props) {
  const {admin,logoutUser}=useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {path,url}=useRouteMatch()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

const classes1 = useStyles1();
  const drawer = (
    <div className={classes1.header}>
      <Toolbar />
      <LockIcon/><Button color="inherit" onClick={logoutUser}>Logout</Button><br/>

      <FindReplaceIcon/><Link className={classes1.linkStyle} to="/explore"><Button color="inherit">Explore</Button></Link><br/>
      {/* <Link className={classes1.linkStyle} to="/dashboard"><Button color="inherit">Dashboard</Button></Link><br/> */}
      <Divider/>
      <ShoppingCartIcon/><Link className={classes1.linkStyle} to={`${url}/myorders`}><Button color="inherit">My Orders</Button></Link><br/>
      <ReviewsIcon/><Link className={classes1.linkStyle} to={`${url}/review`}><Button color="inherit">Review</Button></Link><br/>
      <MonetizationOnIcon/><Link className={classes1.linkStyle} to={`${url}/pay`}><Button color="inherit">Pay</Button></Link><br/>
      <Divider/>
      {
        admin && <Box className={classes1.header}>
        <AssignmentIndIcon/><Link className={classes1.linkStyle} to={`${url}/makeAdmin`}><Button color="inherit">MakeAdmin</Button></Link><br/>
        <EditIcon /><Link className={classes1.linkStyle} to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link><br/>
        <MiscellaneousServicesIcon/><Link className={classes1.linkStyle} to={`${url}/manageallorders`}><Button color="inherit">Manage All Orders</Button></Link><br/>
        <IsoIcon/><Link className={classes1.linkStyle} to={`${url}/manageproducts`}><Button color="inherit">Manage Products</Button></Link>
        
        </Box>
      }
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' ,bgcolor:'#fffde7'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor:'#a3e66a',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      
        <Switch>
            <PrivateRoute exact path={path}>
              <DashBoardHome></DashBoardHome>
            </PrivateRoute>
            <PrivateRoute path={`${path}/pay`}>
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path={`${path}/review`}>
              <Reviews></Reviews>
            </PrivateRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageallorders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/manageproducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/update/:id`}>
              <UpdateProduct></UpdateProduct>
            </AdminRoute>
         
        </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  window: PropTypes.func,
};

export default DashBoard;

