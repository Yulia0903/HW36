import React from 'react'
import style from '../../Header.module.scss'
import Popup from 'reactjs-popup'
import { NavLink } from 'react-router-dom'

export default function PopUp() {
    const { anchorBuy, arrowUp, anchorWindow, colorPopUp, flexWindow } = style
    return (
        <div>
            <Popup
                trigger={
                    <li className={anchorBuy}>
                        Покупцям<i class={arrowUp}></i>
                    </li>
                }
                position="bottom center"
            >
                <div className={flexWindow}>
                    <NavLink className={anchorWindow} to="/about">
                        <li className={colorPopUp}>Про Нас</li>
                    </NavLink>
                    <br />
                    <NavLink className={anchorWindow} to="/delivery">
                        <li className={colorPopUp}>Доставка та оплата</li>
                    </NavLink>
                </div>
            </Popup>
        </div>
    )
}
