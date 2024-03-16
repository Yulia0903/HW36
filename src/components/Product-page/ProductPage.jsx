import React from 'react'
import './Buy-card.scss'
import GreenBtn from '../Buttons/Green-btn/Green-btn'
import { CiHeart } from 'react-icons/ci'

const LargeCard = ({ name, manufacture, price, img }) => {
    return (
        <div className="large-card">
            <div className="image-container">
                <img src={img} alt={name} className="product-image" />
            </div>
            <div className="details-container">
                <h2 className="product-name">{name}</h2>
                <p className="manufacturer">Виробник: {manufacture}</p>
                <p className="product-price">Ціна: {price}</p>
                <div className="color-container">
                    <p>Колір:</p>
                    <div className="color-options">
                        <div
                            className="item-option"
                            style={{ backgroundColor: 'black' }}
                        ></div>
                        <div
                            className="item-option"
                            style={{ backgroundColor: 'white' }}
                        ></div>
                        <div
                            className="item-option"
                            style={{ backgroundColor: 'beige' }}
                        ></div>
                    </div>
                </div>
                <div className="size-container">
                    <p>Розмір:</p>
                    <div className="color-options">
                        <div className="item-option">XS</div>
                        <div className="item-option">S</div>
                        <div className="item-option">M</div>
                        <div className="item-option">L</div>
                        <div className="item-option">XL</div>
                    </div>
                </div>
                <div className="button-container">
                    <GreenBtn content={'Купити'} />
                    <button className="favorite-button">
                        <CiHeart className="favourite-icon-card" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LargeCard
