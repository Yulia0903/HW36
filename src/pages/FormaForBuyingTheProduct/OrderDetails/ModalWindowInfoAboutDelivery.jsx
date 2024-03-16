import React from 'react'
import style from './Modal.module.scss'

export default function ModalWindowInfoAboutDelivery({
    cards,
    setIsOpenWindowInfoItems,
}) {
    const { container, list, listItems, img } = style

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    return (
        <div className={container} onClick={stopPropagation}>
            <div>
                <ul className={list}>
                    {cards.map((card = [], index) => {
                        return (
                            <li className={listItems} key={index}>
                                <img className={img} src={card.img} alt="" />
                                <p>{card.title}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
