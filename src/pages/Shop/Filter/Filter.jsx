import React from 'react'
import { Link } from 'react-router-dom'
import style from './Filter.module.scss'
import FiltersRoll from './FilterSection/FiltersRoll'

export default function Filter() {
    const { navClothes, navBarClothes, container } = style

    return (
        <div className={container}>
            <div>
                <ul className={navClothes}>
                    <Link className={navBarClothes} to="/underpants">
                        Трусики
                    </Link>
                    <Link className={navBarClothes} to="/bicini">
                        Бюстгалтери
                    </Link>
                    <Link className={navBarClothes} to="/news">
                        Новинки
                    </Link>
                    <Link className={navBarClothes} to="/body">
                        Боді
                    </Link>
                    <Link className={navBarClothes} to="/pyjamas">
                        Піжами
                    </Link>
                    <Link className={navBarClothes} to="/sales">
                        Знижки
                    </Link>
                </ul>
                <FiltersRoll />
            </div>
        </div>
    )
}
