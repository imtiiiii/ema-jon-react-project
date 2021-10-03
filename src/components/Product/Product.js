import React from 'react';
import './Product.css'

const Product = (props) => {
    //  console.log(props)
    const { img, name, price, seller, star, stock } = props.productInfo;
    //console.log(props.productInfo);
    return (
        <div className="products">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <h5>by: {seller}</h5>
                <h5>Price: ${price}</h5>
                <h5>Only {stock} left in stock</h5>
                <button className="btn-cart"
                    onClick={() => props.handleCart(props.productInfo)}

                >Add to cart</button>
            </div>
        </div>
    );
};

export default Product;