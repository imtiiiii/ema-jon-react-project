import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

import { retriveCart, setStorage } from "../../utilities/localStorage"
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("./products.JSON")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    useEffect(() => {

        if (products.length) {
            const savedCart = retriveCart();
            let notEmpty = 0;
            let previousItems = [];
            for (const key in savedCart) {
                notEmpty++;
                if (notEmpty) {
                    const tempobj = products.find(product => product.key === key);
                    const quantity = savedCart[key];
                    tempobj.quantity = quantity;
                    previousItems.push(tempobj);
                }
            }
            const temparr = [...previousItems];
            setCart(temparr);
        }
    }, [products]);

    const handleAddToCart = product => {
        const newCart = [...cart, product];

        //console.log(newCart);
        const localStorageKey = product.key;
        //console.log(localStorageKey);
        let x = setStorage("cart", localStorageKey);
        return setCart(newCart);
    }


    return (
        <section className="shop-container">
            <div className="product-container">
                <h1>Products:{products.length}
                    {
                        products.map(product => <Product productInfo={product}
                            key={product.key}
                            handleCart={handleAddToCart}
                        ></Product>)
                    }
                </h1>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </section>
    );
};

export default Shop;