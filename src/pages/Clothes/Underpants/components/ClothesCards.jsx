import React, { useState, useEffect } from 'react'
import { ways } from '../../../../data/data'
import style from './ClothesCards.module.scss'
import '@fontsource/roboto'
import Details from './Details'
import HeaderMainSection from '../../../Shop/MainPart/components/Header/HeaderMainSection'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FavoriteIcons from './FavoriteIcon'

export default function ClothesCards({
    item,
    category,
    disabled = true,
    buttonOff = true,
}) {
    const {
        headerMainSection,
        img,
        title,
        description,
        price,
        listOfUnderClothes,
        listOfItem,
        hoverItem,
        lineThrough,
        desiredIcon,
    } = style

    const [ShowDetailsAboutItem, setShowDetailsAboutItem] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])

    const handleEnteringOnItem = (e) => {
        console.log(e)
        setShowDetailsAboutItem(true)
        setSelectedItem(e)
    }

    return (
        <div>
            {disabled && (
                <HeaderMainSection
                    className={headerMainSection}
                    titleSite={item}
                    disabled={buttonOff}
                />
            )}
            <ul className={listOfUnderClothes}>
                {ways
                    .filter(
                        (e) => e.categories && e.categories.includes(category)
                    )
                    .map((e) => {
                        return (
                            <li
                                onMouseEnter={() => handleEnteringOnItem(e.id)}
                                onMouseLeave={() =>
                                    setShowDetailsAboutItem(false)
                                }
                                className={listOfItem}
                                key={e.id}
                            >
                                <div className={hoverItem}>
                                    <li className={desiredIcon}>
                                        <FavoriteIcons item={e} />
                                    </li>
                                    <Link to={`/additional-info/${e.id}`}>
                                        <img
                                            className={img}
                                            src={e.image}
                                            alt="Here must be an img"
                                        />
                                        <h2 className={title}>{e.title}</h2>
                                        <h3 className={description}>
                                            {e.description}
                                        </h3>
                                    </Link>
                                    {e.sales ? (
                                        <>
                                            <h3
                                                className={
                                                    e.sales ? price : null
                                                }
                                            >
                                                {e.discount}
                                            </h3>
                                            <span className={lineThrough}>
                                                {e.price}
                                            </span>
                                        </>
                                    ) : (
                                        <div>
                                            <h3 className={price}>{e.price}</h3>
                                        </div>
                                    )}
                                    {buttonOff &&
                                        ShowDetailsAboutItem &&
                                        selectedItem === e.id &&
                                        !e.disabled && <Details item={e} />}
                                </div>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
