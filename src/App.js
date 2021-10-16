
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';
import AuthProvider from './Context/AuthProvider';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        {/* homepage */}
                        <Route path="/" exact >
                            <Shop></Shop>
                        </Route>
                        {/* homepage + shop page */}
                        <Route path="/Shop">
                            <Shop></Shop>
                        </Route>
                        {/* Order Review page */}
                        <PrivateRoute path="/placeorder"  >
                            <PlaceOrder></PlaceOrder>
                        </PrivateRoute>
                        {/* Inventory */}
                        <Route path="/Inventory"  >
                            <Inventory></Inventory>
                        </Route>
                        <Route path="/OrderReview">
                            <OrderReview></OrderReview>

                        </Route>
                        {/* login page */}
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        {/* register page */}
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        {/* if the url is wrong */}
                        <Route path="*"  >
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>

    );
}

export default App;
