import React, { useState } from 'react'
import style from '../../Header.module.scss'
import { GrUserManager } from 'react-icons/gr'
import { FaRegHeart } from 'react-icons/fa'
import { IoBag } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import Login from './Login/Login'
import ModalWindow from './ModalWindowBin/ModalWindow.jsx'

export default function IconsHeader() {
    const { icons, flex } = style
    const [modalActive, setModalActive] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)


    return (
        <div>
            <ul className={flex}>
                <GrUserManager
                    className={icons}
                    onClick={() => setModalLogin(true)}
                />
                <NavLink to={'/desired'}>
                    <FaRegHeart className={icons} />
                </NavLink>
                <IoBag className={icons} onClick={() => setModalActive(true)} />
            </ul>
            <ModalWindow active={modalActive} setActive={setModalActive} />
            <Login active={modalLogin} setActive={setModalLogin}/>
        </div>
    )
}
