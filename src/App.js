import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/addService/AddService';
import Services from './Pages/Home/Services/Services';
import Service from './Pages/Home/Service/Service';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import Myorders from './Pages/MyOrders/Myorders';
import MyorderDetails from './Pages/MyorderDetails/MyorderDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Login/Register/Register';
import MoreProducts from './Pages/MoreProductsMain/MoreProducts/MoreProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MoreProductsMain from './Pages/MoreProductsMain/MoreProductsMain/MoreProductsMain';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
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
              <Register />
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>


            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <Route path="/myorderDetails" >
              <MyorderDetails></MyorderDetails>
            </Route>

            <PrivateRoute path="/addservice" >
              <AddService></AddService>
            </PrivateRoute>

            <Route path="/services" >
              <Services></Services>
            </Route>

            <Route path="/service" >
              <Service></Service>
            </Route>

            <Route path="/moreProducts" >
              <MoreProductsMain></MoreProductsMain>
            </Route>

            <PrivateRoute path="/manageAllOrders" >
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
