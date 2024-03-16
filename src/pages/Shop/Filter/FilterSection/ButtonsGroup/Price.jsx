import React, { useState } from 'react'
import style from './ButtonsGroup.module.scss'

export default function Price() {
    const { inputPrice, button, scrollabletextbox } = style
    const [minPrice, setMinPrice] = useState(25)
    const [maxPrice, setMaxPrice] = useState(150)

    const handleFilterPrice = () => {
        console.log(`This is ${minPrice} to ${maxPrice}`)
    }

    return (
        <div>
            <div className={style.price}>
                <input
                    className={inputPrice}
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                -
                <input
                    className={inputPrice}
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
                <button className={button} onClick={handleFilterPrice}>
                    OK
                </button>
            </div>
        </div>
    )
}
