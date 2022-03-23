import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-content">
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;