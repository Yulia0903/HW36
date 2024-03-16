import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavClothes.module.scss'

export default function NavClothes() {
    const { navClothes, navCenter, navBarClothes, line, screenMopile } = style
    return (
        <div>
            <nav className={navCenter}>
                <div className={line}></div>
                <div className={screenMopile}>
                    <ul className={navClothes}>
                        <NavLink className={navBarClothes} to="/underpants">
                            Трусики
                        </NavLink>
                        <NavLink className={navBarClothes} to="/bicini">
                            Бюстгалтери
                        </NavLink>
                        <NavLink className={navBarClothes} to="/news">
                            Новинки
                        </NavLink>
                        <NavLink className={navBarClothes} to="/body">
                            Боді
                        </NavLink>
                        <NavLink className={navBarClothes} to="/pyjamas">
                            Піжами
                        </NavLink>
                        <NavLink className={navBarClothes} to="/sales">
                            Знижки
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
