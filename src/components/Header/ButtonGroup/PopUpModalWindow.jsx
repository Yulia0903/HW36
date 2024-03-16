import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './ButtonGroup.module.scss'
import Popup from 'reactjs-popup'
import { IoClose } from 'react-icons/io5'

export default function PopUpModalWindow({ onSetOpen }) {
    const {
        flexWindow,
        anchorWindow,
        anchor,
        windowPopUp,
        navBarClothes,
        navClothes,
        title,
        modalWindow,
        cross,
        animationPopUp,
    } = style
    return (
        <div className={modalWindow}>
            <div className={windowPopUp}>
                <ul>
                    <div>
                        <h2 className={title}>Меню</h2>
                        <IoClose
                            className={cross}
                            onClick={() => onSetOpen(false)}
                        />
                    </div>
                    <NavLink className={anchor} to={'/'}>
                        <li>Головна</li>
                    </NavLink>
                    <NavLink className={anchor} to={'/shop'}>
                        <li>Магазин</li>
                    </NavLink>
                    <Popup
                        trigger={
                            <li className={`${anchor} ${animationPopUp}`}>
                                Покупцям
                            </li>
                        }
                        position="right center"
                    >
                        <div className={flexWindow}>
                            <NavLink className={anchorWindow} to="/about">
                                <li className={anchor}>Про Нас</li>
                            </NavLink>
                            <br />
                            <NavLink className={anchorWindow} to="/delivery">
                                <li className={anchor}>Доставка та оплата</li>
                            </NavLink>
                        </div>
                    </Popup>

                    <NavLink className={anchor} to={'/blogs'}>
                        <li>Блог</li>
                    </NavLink>
                    <NavLink className={anchor} to={'/contacts'}>
                        <li>Контакти</li>
                    </NavLink>
                </ul>
                <ul className={navClothes}>
                    <h2 className={title}>Каталог</h2>
                    <NavLink className={navBarClothes} to="/underpants">
                        Трусики
                    </NavLink>
                    <NavLink className={navBarClothes} to="/bicini">
                        Бюстгалтери
                    </NavLink>
                    <NavLink className={navBarClothes} to="/news">
                        Новинки
                    </NavLink>
                    <NavLink className={navBarClothes} to="/pyjamas">
                        Боді
                    </NavLink>
                    <NavLink className={navBarClothes} to="/sales">
                        Піжами
                    </NavLink>
                    <NavLink className={navBarClothes} to="/underpants">
                        Знижки
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}
