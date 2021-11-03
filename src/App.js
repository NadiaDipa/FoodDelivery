import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';

import Login from './components/Login/Login/Login';
import Booking from './components/Booking/Booking';
import ManageOrders from './components/ManageOrders/ManageOrders';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import AddServices from './components/AddServices/AddServices';
import NotFound from './components/Not Found/NotFound';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path ="/">
              <Home></Home>
            </Route>

            <Route path="/home">
             <Home></Home>
            </Route>

            <Route path = "/login" >
              <Login></Login>
            </Route>
  
            <PrivateRoute path = "/booking/:serviceId" >
              <Booking></Booking>
            </PrivateRoute>
           
            <Route path="/services">
             <Services></Services>
            </Route>
            <Route path="/manage-orders">
             <ManageOrders></ManageOrders>
            </Route>
            <Route path="/my-orders">
             <MyOrders></MyOrders>
            </Route>
            <Route path="/add-services">
              <AddServices></AddServices>
          </Route>
          <Route path = "*" >
              <NotFound></NotFound>
          </Route>
            
        </Switch>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
