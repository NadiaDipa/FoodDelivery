
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import AddServices from './components/AddServices/AddServices';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>
            <Route path = "/login" >
              <Login></Login>
            </Route>
            {/* <Route path ="/home">
              <Home></Home>
            </Route> */}
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/add-services">
              <AddServices></AddServices>
            </Route>
          </Switch>
      </Router>
     
    </div>
  );
}

export default App;
