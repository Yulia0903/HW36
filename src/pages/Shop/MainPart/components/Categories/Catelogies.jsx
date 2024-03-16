import React from 'react'
import { sections } from '../../../../../data/shopDataSection'
import { Link } from 'react-router-dom'
import style from './Catelogies.module.scss'
import '@fontsource/roboto/700.css'

export default function Categories() {
    const { flexPhotos, img, category, title } = style
    return (
        <div>
            <ul className={flexPhotos}>
                {sections.map((el = [], index) => (
                    <Link className={category} to={el.link} key={el.id}>
                        <img className={img} src={el.image} alt={el.title} />{' '}
                        <h6 className={title}>{el.title}</h6>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
