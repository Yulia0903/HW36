import React from 'react'
import './Product-card.scss'
import { CiHeart } from 'react-icons/ci'

const ProductCard = ({ name, price, img }) => {
    return (
        <div className="card">
            <CiHeart className="favorite-icon" />
            <img src={img} alt={name} className="image" />
            <div className="text-container">
                <div className="name">
                    <p>{name}</p>
                </div>
                <div className="price">
                    <p>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
