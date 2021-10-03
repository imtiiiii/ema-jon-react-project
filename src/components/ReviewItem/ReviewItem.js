import React from 'react';
import { getStorage } from '../../utilities/localStorage';

const ReviewItem = (props) => {

    const { name, seller, price, quantity, key } = props.cart
    return (
        <div>
            <div className="product-info">
                <h3 className="product-name" >{name}</h3>
                <h4>By: {seller}</h4>
                <h4>Price: ${price}</h4>
                <h4>Quantity: {quantity}</h4>
                <button className="btn-cart" onClick={() => props.remove(key)}>Remove</button>
                <hr />
            </div>

        </div>
    );
};

export default ReviewItem;