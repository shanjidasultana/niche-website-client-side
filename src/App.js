import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/Context/AuthProvider';
import DashBoard from './Pages/DashBoard/DashBoard';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import OrderPlaced from './Pages/OrderPlaced/OrderPlaced';
import Footer from './Pages/Shared/Footer/Footer';
// 
// 
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/orderplaced">
              <OrderPlaced></OrderPlaced>
            </PrivateRoute>
            <Route path="/dashboard">
              <DashBoard></DashBoard>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          
        </BrowserRouter>
      </AuthProvider>
   
    </div>
  );
}

export default App;
