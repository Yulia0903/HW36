import React from 'react'
import style from './Footer.module.scss'
import 'react-bootstrap'
import './Footer.module.scss'
import MenuNav from './Navigation/MenuNav'
import Contacts from './Navigation/Contacts'

export default function Footer() {
    const { container, line, footer } = style
    return (
        <>
            <span className={footer}>
                <div className={container}>
                    <MenuNav />
                    <Contacts />
                </div>
            </span>
            <div className={line}></div>
        </>
    )
}
