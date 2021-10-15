
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';

function App() {
    return (
        <div className="App">

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
                    <Route path="/OrderReview"  >
                        <OrderReview></OrderReview>
                    </Route>
                    {/* Inventory */}
                    <Route path="/Inventory"  >
                        <Inventory></Inventory>
                    </Route>
                    <Route path="/placeorder">
                        <PlaceOrder></PlaceOrder>
                    </Route>
                    {/* login page */}
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    {/* if the url is wrong */}
                    <Route path="*"  >
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>

        </div>

    );
}

export default App;
