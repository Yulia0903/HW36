import React from 'react'
import style from './CategoryOfShop.module.scss'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { sections } from '../../data/shopDataSection'

export default function CategoryOfShop({ content }) {
    const { flexPhotos, category, img, title, titleSection } = style

    return (
        <Container maxWidth="lg" breakpoints="lg">
            <h1 className={titleSection}>{content}</h1>
            <ul className={flexPhotos}>
                {sections.map((el = []) => (
                    <Link className={category} to={el.link} key={el.id}>
                        <img className={img} src={el.image} alt={el.title} />{' '}
                        <h6 className={title}>{el.title}</h6>
                    </Link>
                ))}
            </ul>
        </Container>
    )
}
