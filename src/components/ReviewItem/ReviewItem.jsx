import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <div onClick={() => handleRemoveFromCart(id)}>
                <button className='btn-delete'>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>

        </div>
    );
};

export default ReviewItem;