import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../Hooks/Usecart';
import useProducts from '../../Hooks/UseProducts';
import { getStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem'


const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    let keyFlag = 0;

    const removeItem = key => {
        console.log(key);
        const newCart = cart.filter(element => element.key !== key)
        setCart(newCart);
        let accessToDb = getStorage("cart");
        if (accessToDb) {
            accessToDb = JSON.parse(accessToDb);
            for (const keys in accessToDb) {

                if (keys === key) {
                    delete accessToDb[key];
                    accessToDb = JSON.stringify(accessToDb);
                    return localStorage.setItem("cart", accessToDb)
                }
            }
        }
        else {
            return;
        }
    }
    const hadlePlaceOrder = () => {
        setCart([]);
        localStorage.removeItem("cart");
        history.push("./placeorder");
    }



    return (
        <div className="shop-container">
            <div className="product-container">
                <div>
                    {
                        cart.map(product => <ReviewItem key={++keyFlag} cart={product} remove={removeItem}></ReviewItem>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="btn-cart" onClick={hadlePlaceOrder}>Place order</button>

                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;