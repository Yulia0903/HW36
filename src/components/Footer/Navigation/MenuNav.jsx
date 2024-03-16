import React from 'react'
import style from '../Footer.module.scss'
import 'react-bootstrap'
import '../Footer.module.scss'
import Logo from './components/Logo'
import Menu from './components/Menu'
import Personal from './components/Personal'

export default function MenuNav() {
    return (
        <div className={style.flexBorder}>
            <Logo />
            <div className={style.noneNav}>
            <Menu />
            <Personal />
            </div>
        </div>
    )
}
