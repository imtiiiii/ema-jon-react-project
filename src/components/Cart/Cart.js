import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Cart.css'
const Cart = (props) => {

    const itemArray = props.cart;

    let itemsPrice = 0;
    let shippingPrice = 0;
    let tax = 0;
    let ItemsOrdered = 0;
    for (const item of itemArray) {
        let quantity = 0;
        quantity = item?.quantity;
        if (!quantity) {
            quantity = 1;
        }
        itemsPrice += item?.price * quantity;
        shippingPrice += item?.shipping * quantity;
        ItemsOrdered += quantity;
    }
    tax = itemsPrice > 100 ? 20 : 0;
    itemsPrice = itemsPrice.toFixed(2);
    itemsPrice = parseFloat(itemsPrice);
    shippingPrice = shippingPrice.toFixed(2);
    shippingPrice = parseFloat(shippingPrice);
    let costBeforeTax = shippingPrice + itemsPrice;
    costBeforeTax = costBeforeTax.toFixed(2);
    costBeforeTax = parseFloat(costBeforeTax);
    let total = shippingPrice + itemsPrice + tax;
    total = total.toFixed(2);
    total = parseFloat(total);

    return (
        <div className="cart-details">
            <h1 className="summery">Order summury:</h1>
            <h4>Items ordered: ${ItemsOrdered}</h4>
            <h4>Items cost: ${itemsPrice}</h4>
            <h4>Shipping and handeling cost: ${shippingPrice}</h4>
            <h4>Cost before tax: ${costBeforeTax}</h4>
            <h4>Estimated tax: ${tax}</h4>
            <h2 className="order-total">Order total: ${total}</h2>
            {props.children}

        </div>
    );
};

export default Cart;