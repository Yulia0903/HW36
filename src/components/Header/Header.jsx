import React from 'react'
import 'react-bootstrap'
import 'reactjs-popup/dist/index.css'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import NavClothes from './ButtonGroup/NavClothes/NavClothes'
import PopUp from './ButtonGroup/PopUp/PopUp'
import IconsHeader from './ButtonGroup/IconsHeader/IconsHeader'

import HamburgerWindow from './ButtonGroup/HamburgerWindow'

export default function Header() {
    const {
        flex,
        anchor,
        container,
        img,
        nav,
        navFlex,
        line,
        screenMopile,
    } = style

    return (
        <>
            <div className={container}>
                <div className={navFlex}>
                    <nav className={nav}>
                        <HamburgerWindow />
                        <ul className={flex}>
                            <div className={screenMopile}>
                                <NavLink className={anchor} to={'/'}>
                                    Головна
                                </NavLink>
                                <NavLink className={anchor} to={'/shop'}>
                                    <li>Магазин</li>
                                </NavLink>
                                <PopUp />
                                <NavLink className={anchor} to={'/blogs'}>
                                    <li>Блог</li>
                                </NavLink>
                                <NavLink className={anchor} to={'/contacts'}>
                                    <li>Контакти</li>
                                </NavLink>
                            </div>
                        </ul>
                        <img
                            className={img}
                            src="https://demox-000-18.site-x.pro/Media/demox-000-18/icons/logo/demox_18_logo.svg"
                            alt="Here must be an img!"
                        />
                        <IconsHeader />
                    </nav>
                </div>
            </div>
            <NavClothes />
            <div className={line}></div>
        </>
    )
}
