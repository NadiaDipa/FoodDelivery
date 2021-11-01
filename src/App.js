
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
// import Login from './components/Login/Login';

// import Services from './components/Services/Services';
import AddServices from './components/AddServices/AddServices';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
// import Login from './components/Login/Login/Login';
// import Booking from './components/Booking/Booking';
import Login from './components/Login/Login/Login';
import Booking from './components/Booking/Booking';
import ManageOrders from './components/ManageOrders/ManageOrders';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>
            <Route path="/home">
             <Home></Home>
            </Route>
            <Route path = "/login" >
              <Login></Login>
            </Route>

            
            <PrivateRoute path = "/booking/:serviceId" >
              <Booking></Booking>
            </PrivateRoute>
           
            {/* <Route path ="/home">
              <Home></Home>
            </Route> */}
            
            <Route path="/services">
             <Services></Services>
            </Route>
            <PrivateRoute path="/manage-orders">
             <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/add-services">
              <AddServices></AddServices>
            </PrivateRoute>
            
          </Switch>
      </Router>
     
    </div>
  );
}

export default App;
