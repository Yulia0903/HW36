import React from 'react'
import ButtonBrown from '../BrownButton/ButtonBrown'
import { Link } from 'react-router-dom'
import style from './WeddingColection.module.scss'
import Title from '../Title/Title'

export default function WeddingColection() {
    const { flex, img, txt, title, info } = style
    return (
        <div className={flex}>
            <img
                className={img}
                src="https://www.fotoivideo.com.ua/wp-content/uploads/2024/02/1foto-jpg.webp"
                alt=""
            />
            <div className={info}>
                <p className={txt}>Будь особливою</p>
                <li className={title}>
                    <Title title="Весільна колекція" />
                </li>
                <Link to="/shop">
                    <ButtonBrown content="До каталогу" />
                </Link>
            </div>
        </div>
    )
}
