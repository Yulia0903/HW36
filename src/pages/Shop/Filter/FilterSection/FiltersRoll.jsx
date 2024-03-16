import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import style from './FiltersRoll.module.scss'
import Price from './ButtonsGroup/Price'
import Maker from './ButtonsGroup/Maker'
import Color from './ButtonsGroup/Color'
import Size from './ButtonsGroup/Size'

const filters = ['Ціна', 'Виробник', 'Колір', 'Розмір']

export default function Menu() {
    const { arrowAnimation, filterTitile, category, visible } = style
    const [activeCategory, setActiveCategory] = useState(null)
    const [infoPrice, setInfoPrice] = useState(
        Array(filters.length).fill(false)
    )

    const handleClickFilter = (index) => {
        const newInfoPrice = Array(filters.length).fill(false)
        newInfoPrice[index] = ++index
        setInfoPrice(newInfoPrice)
    }

    return (
        <div>
            <h4 className={filterTitile}>Фільтри</h4>
            {filters.map((filter, index) => (
                <div key={index} onClick={() => setActiveCategory(index)}>
                    <h5 onClick={() => handleClickFilter(index)}>
                        {filter}{' '}
                        <span>
                            {activeCategory === index ? (
                                <IoIosArrowUp />
                            ) : (
                                <IoIosArrowDown className={arrowAnimation} />
                            )}
                        </span>
                    </h5>
                    <div
                        className={`${category} ${infoPrice[index] ? visible : ''}`}
                    >
                        {infoPrice[index] === 1 && <Price />}
                        {infoPrice[index] === 2 && <Maker />}
                        {infoPrice[index] === 3 && <Color />}
                        {infoPrice[index] === 4 && <Size />}
                    </div>
                </div>
            ))}
        </div>
    )
}
